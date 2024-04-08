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

function renderInput(elem) {
  const input = document.getElementById(elem);
  const countElement = document.getElementById(`${elem}_count`);

  countElement.innerText = window.store[elem] ?? 1;

  input.value = window.store[elem] ?? 1;

  input.onchange = (e) => {
    countElement.innerText = e.target.value;
    window.store[elem] = e.target.value;
    console.log(window.store);
  };
}

// rendering and dom manipulation

function bootstrap() {
  const applyFilters = document.getElementById("apply_filters");
  renderInput("blur");
  renderInput("radius");
  renderInput("maxZoom");
  renderInput("minOpacity");
  renderInput("minDensity");
  renderInput("maxDensity");
  renderInput("urbanizationGrade");

  applyFilters.onclick = () => {
    insertUrlParam("blur", window.store["blur"]);
    insertUrlParam("radius", window.store["radius"]);
    insertUrlParam("maxZoom", window.store["maxZoom"]);
    insertUrlParam("minOpacity", window.store["minOpacity"]);
    insertUrlParam("minDensity", window.store["minDensity"]);
    insertUrlParam("maxDensity", window.store["maxDensity"]);
    insertUrlParam("urbanizationGrade", window.store["urbanizationGrade"]);
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
