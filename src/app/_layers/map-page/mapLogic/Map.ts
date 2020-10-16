import * as ymapsTypes from 'yandex-maps';
import {driverForDistricts} from './drivers';
import {CustomArray, CustomObject} from './utils';

// @ts-ignore

export default class Map {

  myMap: ymapsTypes.Map
  objects = new CustomObject()

  constructor() {}

  init() {
    this.myMap = new window.ymaps.Map("map",
      {
        center: [55.76, 37.64],
        zoom: 12,
      },
      {
        minZoom: 11,
        suppressMapOpenBlock: true
    });
    return this.myMap
  }
}

// сюда прописываем инфу по всем запросам, которые собираемся делать
const kindsOfRequests = {
  'getDistricts': {
    url: `/assets/data/districts.json`,
    driverForDataTransform: driverForDistricts,
    requestOptions: {
      method: "GET"
    }
  }
}

// получает информацию с сервера, подключая тот или иной конфиг по ключу
export const getInfoFromServer = async (whatToGetKey, cb) => {
  const { url, driverForDataTransform, requestOptions } = kindsOfRequests[whatToGetKey]
  const data = await fetch(url, requestOptions)
    .then(res => res.json())
    .then(driverForDataTransform)

  cb(data)
}
