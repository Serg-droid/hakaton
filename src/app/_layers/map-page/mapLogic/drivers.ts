// import {invertCoords, loadData} from './utils';
// import {drawFromGeoJson, drawPolygon} from './draw';
//
// export async function getPlaceCoords(placeName) {
//   const places = await loadData(`https://nominatim.openstreetmap.org/search?q=${placeName}&format=json&polygon_geojson=1`, {
//     mode: 'cors',
//     headers: {
//       'Accept': 'application/json; charset=UTF-8',
//     }
//   }).then(res => res.json())
//
//   places.forEach(place => {
//     if (place.osm_type === 'relation') {
//       const coordinates = place.geojson.coordinates.map(coords => invertCoords(coords))
//       drawFromGeoJson({type: place.geojson.type, coordinates})
//     }
//   })
// }
//
//
// export async function loadDistrictsData() {
//   const districts = await loadData('/assets/data/districts.json')
//     .then(res => res.json())
//
//   districts.data.list.forEach(district => {
//     if(district.polygons.type === "MultiPolygon") {
//       district.polygons.coordinates.forEach(coords => {
//         drawFromGeoJson({type: 'Polygon', coordinates: coords})
//       })
//     }
//   })
// }





