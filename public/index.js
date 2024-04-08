// utils
function insertUrlParam(key, value) {
  if (history.pushState) {
    let searchParams = new URLSearchParams(window.location.search);
    searchParams.set(key, value);
    let newUrl =
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname +
      "?" +
      searchParams.toString();
    window.history.pushState({ path: newUrl }, "", newUrl);
  }
}

function deleteUrlParams() {
  if (history.pushState) {
    let newUrl =
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname;
    window.history.pushState({ path: newUrl }, "", newUrl);
  }
}

function updateMinMax(minMax) {
  // update the minmax value on maxdensity
  const maxDensity = document.getElementById("maxDensity");
  const [leftValue, rightValue] = minMax.split("-");

  maxDensity.min = leftValue;
  maxDensity.max = rightValue;
}

function renderInput(elem) {
  const input = document.getElementById(elem);
  const countElement = document.getElementById(`${elem}_count`);

  countElement.innerText = window.store[elem] ?? 1;

  input.value = window.store[elem] ?? 1;

  input.onchange = (e) => {
    countElement.innerText = e.target.value;
    window.store[elem] = e.target.value;
    insertUrlParam(elem, e.target.value);
    window.location.reload();
  };

  input.addEventListener("input", (e) => {
    countElement.innerText = e.target.value;
  });
}

function renderSelect(elem) {
  const input = document.getElementById(elem);
  const countElement = document.getElementById(`${elem}_count`);

  countElement.innerText = window.store[elem] ?? "1000-4999";

  input.value = window.store[elem] ?? "1000-4999";

  input.onchange = (e) => {
    countElement.innerText = e.target.value;
    window.store[elem] = e.target.value;
    insertUrlParam(elem, e.target.value);
    renderInput("maxDensity");
    updateMinMax(e.target.value);
  };
}

// rendering and dom manipulation

function bootstrap() {
  const clearFilters = document.getElementById("clear_filters");
  renderInput("blur");
  renderInput("radius");
  renderInput("maxZoom");
  renderInput("minOpacity");
  renderInput("minDensity");
  renderInput("maxDensity");
  renderInput("urbanizationGrade");
  renderSelect("rangeDensity");

  clearFilters.onclick = () => {
    deleteUrlParams();
    window.location.reload();
  };
}

(function () {
  const baseCoordinate = [37.86, 14.39];
  let map = L.map("map").setView(baseCoordinate, 6);
  // initialize Leaflet
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  const queryParams = new URLSearchParams(window.location.search);
  const options = {
    radius: parseFloat(queryParams.get("radius")) || 25,
    maxZoom: parseFloat(queryParams.get("maxZoom")) || 10,
    minOpacity: parseFloat(queryParams.get("minOpacity")) || 0.5,
    blur: parseFloat(queryParams.get("blur")) || 20,
  };

  window.store = {
    ...options,
    minDensity: parseInt(queryParams.get("minDensity")) || 20,
    maxDensity: parseInt(queryParams.get("maxDensity")) || 2000,
    urbanizationGrade: parseInt(queryParams.get("urbanizationGrade")) || 2,
    rangeDensity: queryParams.get("rangeDensity") || "1000-4999",
  };

  bootstrap();

  const filteredLocations = allMarkers.filter(
    ({ poblational_density, urbanization_grade }) =>
      window.store.minDensity <= poblational_density &&
      window.store.maxDensity >= poblational_density &&
      window.store.urbanizationGrade === urbanization_grade
  );

  const locations = filteredLocations.map(({ coordinates }) => coordinates);

  L.heatLayer(locations, options).addTo(map);
})();
