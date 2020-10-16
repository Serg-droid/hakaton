import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapDriverService {

  constructor() { }

  driverForDistricts(districts) {
    console.log(districts)
    const geoJSON = {
      "type": "FeatureCollection",
      features: []
    }

    geoJSON.features = districts.data.list.reduce((acc, district, index) => {

      const obj = {
        type: 'Polygon',
        coordinates: []
      }

      if (district.polygons.type === "MultiPolygon") {
        district.polygons.coordinates.forEach(coords => {
          obj.coordinates = coords
        })
      } else {
        obj.coordinates = district.polygons.coordinates
      }

      acc.push({
        type: 'Feature',
        id: index,
        geometry: obj,
        properties: {
          "balloonContent": district.name,
          "clusterCaption": "Метка 1",
          "hintContent": "Текст подсказки",
          "myDescription": "Произвольное описание",
        },
        options: {
          fillColor: Math.floor(Math.random() * 2) === 1 ? '#d06364' : '#80d063',
          opacity: 0.4,
          strokeOpacity: 0.7
        }
      })
      return acc
    }, [])

    return geoJSON
  }
}
