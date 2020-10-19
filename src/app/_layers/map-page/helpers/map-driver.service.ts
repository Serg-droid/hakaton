import { Injectable } from '@angular/core';
import {capitalize, chooseColor, chooseMarker} from './utils';

@Injectable({
  providedIn: 'root'
})
export class MapDriverService {

  districtsLoaded: boolean
  pointsLoaded: boolean
  constructor() { }

  // вариант создания инстансов
  // const districts = this.driver.driverForDistricts(data)
  // this.districtsManager = new this.ymaps.ObjectManager()
  // this.districtsManager.add(districts)
  driverForDistricts(districts, options): any {
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

      const balloonContentLayoutFactory = options.balloonContentLayoutFactory
        ? options.balloonContentLayoutFactory
        : ''

      acc.push({
        type: 'Feature',
        id: index,
        geometry: obj,
        properties: {
          // "balloonContentHeader": district.name,
          // "balloonContentBody": balloonContentLayout,
          "clusterCaption": "Метка 1",
          "hintContent": "Текст подсказки",
          "myDescription": "Произвольное описание",
        },
        options: {
          fillColor: Math.floor(Math.random() * 2) === 1 ? '#d06364' : '#80d063',
          opacity: 0.4,
          strokeOpacity: 0.7,
          balloonContentLayout: balloonContentLayoutFactory(district.name),
        }
      })
      return acc
    }, [])

    this.districtsLoaded = true
    return geoJSON
  }

  // вариант создания инстансов
  // this.points = this.driver.driverForPoints(points)
  // const placemarks = this.points.map(p => new this.ymaps.GeoObject(...p))
  driverForPoints(points): any {
    const geoJSON = {
      "type": "FeatureCollection",
      features: []
    }
    for (const [index, point] of points.entries()) {
      const object = {
        type: 'Point',
        coordinates: point.coordinates
      }

      geoJSON.features.push({
        type: 'Feature',
        id: index,
        geometry: object,
        properties: {
          "balloonContent": 'keke',
          "clusterCaption": capitalize(point.type),
          "hintContent": "Текст подсказки",
          "myDescription": "Произвольное описание",
        },
        options: {
              iconLayout: 'default#image',
              iconImageHref: `/assets/images/map/markers/${chooseMarker(point)}.png`,
              iconImageSize: [32, 48],
              iconImageOffset: [-16, -48],
              iconColor: chooseColor(point)
        }
      })
    }

    this.pointsLoaded = true
    return geoJSON
  }
}
