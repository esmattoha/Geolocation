// mapboxgl.accessToken =
// 'pk.eyJ1IjoiZXNtYXR0b2hhIiwiYSI6ImNrbmZzZ3p2bTAwZmYybm9ibzc3dGl0ZnQifQ.dw4Ln6ZEfcOY-oNQ4EGocA';
// const map = new mapboxgl.Map({
//   container: 'map',
//   style: 'mapbox://styles/mapbox/streets-v11',
//   zoom: 9,
//   center: [88.363892, 22.572645]
// });




// // Fetch stores from API
// async function getLoc() {
//   const res = await fetch('/loc');
//   const data = await res.json();

//   const stores = data.data.map(store => {
//     return {
//       type: 'Feature',
//       geometry: {
//         type: 'Point',
//         coordinates: [
//           store.location.coordinates[0],
//           store.location.coordinates[1]
//         ]
//       },
//       properties: {
//         storeId: store.title,
//         icon: 'shop'
//       }
//     };
//   });

//   loadMap(stores);
// }

// // Load map with stores
// function loadMap(stores) {
//   map.on('load', function() {
//     map.addLayer({
//       id: 'points',
//       type: 'symbol',
//       source: {
//         type: 'geojson',
//         data: {
//           type: 'FeatureCollection',
//           features: stores
//         }
//       },
//       layout: {
//         'icon-image': '{icon}-15',
//         'icon-size': 1.5,
//         'text-field': '{storeId}',
//         'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
//         'text-offset': [0, 0.9],
//         'text-anchor': 'top'
//       }
//     });
//   });
// }

// getLoc();