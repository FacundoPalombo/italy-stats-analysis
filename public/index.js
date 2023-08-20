(function () {
  const baseCoordinate = [37.86, 14.39];
  let map = L.map("map").setView(baseCoordinate, 6);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}", {
    foo: "bar",
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  let failures = [];
  // for (let location of allMarkers) {
  //   const { coordinates, city, poblational_density, urbanization_grade } =
  //     location;
  //   try {
  //     let markers = L.marker(coordinates, {
  //       draggable: false,
  //       title: `${urbanization_grade} - ${city} - D(${poblational_density})`,
  //     }).addTo(map);
  //   } catch (err) {
  //     console.error(err);
  //     console.log(location);
  //     failures.push(location);
  //   }
  // }

  const locations = allMarkers.map(({ coordinates }) => coordinates);
  const queryParams = new URLSearchParams(window.location.href);
  const options = {
    radius: parseFloat(queryParams.get("radius")) || 25,
    maxZoom: parseFloat(queryParams.get("max_zoom")) || 15,
    minOpacity: parseFloat(queryParams.get("min_opacity")) || 0.5,
    blur: parseFloat(queryParams.get("blur")) || 20,
  };

  L.heatLayer(locations, options).addTo(map);
  console.log(map);
})();
