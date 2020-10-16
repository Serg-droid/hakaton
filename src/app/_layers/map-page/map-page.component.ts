import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MapLoadService} from './helpers/map-load.service';
import {MapDriverService} from './helpers/map-driver.service';
import {map} from 'rxjs/operators'

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.scss']
})
export class MapPageComponent implements OnInit, AfterViewInit {

  animation = {
    mapOptionsOpened: false
  }
  ymaps = window['ymaps']
  map
  districts: []
  districtsManager
  placemarksManager

  constructor(
    private load: MapLoadService,
    private driver: MapDriverService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.ymaps.ready(() => {
      this.map = new this.ymaps.Map('map', {
        center: [55.755826,37.61730],
        zoom: 10,
        controls: ['typeSelector', 'geolocationControl', 'zoomControl'],
      }, {
        minZoom: 10,
        restrictMapArea: [[54.9, 36.3], [56.2, 38.8]],
        suppressMapOpenBlock: true
    })

    this.load.getDistricts()
      .pipe(
        map(this.driver.driverForDistricts.bind(this))
      )
      .subscribe((districts: []) => {
        this.districts = districts
        this.showDistricts(districts)
      })

      const cityList = new this.ymaps.control.ListBox({
        data: {
          content: 'Выберите режим отображения'
        },
        items: [
          new this.ymaps.control.ListBoxItem('Границы районов'),
          new this.ymaps.control.ListBoxItem('Метки'),
        ]
      });
      const select1 = cityList.get(0),
            select2 = cityList.get(1)
      select1.events.add('select', () => {
        select2.deselect()
        this.showDistricts(this.districts)
      });
      select2.events.add('select', () => {
        select1.deselect()
        this.showPlacemarks()
      });
      this.map.controls.add(cityList);

  })

  }

  showDistricts(districts: []) {
    if(this.placemarksManager) {
      this.placemarksManager.removeAll()
    }

    this.districtsManager = new this.ymaps.ObjectManager()
    this.districtsManager.add(districts)
    this.map.geoObjects.add(this.districtsManager)

    this.districtsManager.objects.events.add('mouseenter', (e) => {
      const objectId = e.get('objectId')
      const overlay = this.districtsManager.objects.overlays.getById(objectId)
      overlay.options.set('opacity', 1)
    })
    this.districtsManager.objects.events.add('mouseleave', (e) => {
      const objectId = e.get('objectId')
      const overlay = this.districtsManager.objects.overlays.getById(objectId)
      overlay.options.set('opacity', 0.3)
    })
  }

  showPlacemarks() {
    if(this.districtsManager) {
      this.districtsManager.removeAll()
    }

    this.placemarksManager = new this.ymaps.ObjectManager()

    this.map.geoObjects.add(this.districtsManager)
  }






}

// ymaps.ready(init);
//
// function init() {
//   let myMap = new ymaps.Map('map', {
//       center: [55.755814, 37.617635],
//       zoom: 14,
//       controls: ['routeButtonControl', 'typeSelector', 'fullscreenControl'],
//     }, {
//       searchControlProvider: 'yandex#search'
//     }),
//     objectManager = new ymaps.ObjectManager({
//       clusterize: true,
//       gridSize: 64,
//       clusterIconLayout: "default#pieChart"
//     });
//   myMap.geoObjects.add(objectManager);
//
//   let listBoxItems = ['2G', '3G', '4G'].map(function(title) {
//       return new ymaps.control.ListBoxItem({
//         data: {
//           content: title
//         },
//         state: {
//           selected: true
//         }
//       })
//     }),
//     listBoxControl = new ymaps.control.ListBox({
//       data: {
//         content: 'Filter',
//         title: 'Filter'
//       },
//       items: listBoxItems,
//       state: {
//         expanded: true,
//         filters: listBoxItems.reduce(function(filters, filter) {
//           filters[filter.data.get('content')] = filter.isSelected();
//           return filters;
//         }, {})
//       }
//     });
//   myMap.controls.add(listBoxControl);
//
//   const cityList = new ymaps.control.ListBox({
//     data: {
//       content: 'Select a city'
//     },
//     items: [
//       new ymaps.control.ListBoxItem('Moscow'),
//       new ymaps.control.ListBoxItem('Novosibirsk'),
//       new ymaps.control.ListBoxItem({
//         options: {
//           type: 'separator'
//         }
//       }),
//       new ymaps.control.ListBoxItem('New York'), ]
//   });
//   cityList.get(0)
//     .events.add('click', function () {
//     myMap.setCenter([55.752736, 37.606815]);
//   });
//   cityList.get(1)
//     .events.add('click', function () {
//     myMap.setCenter([55.026366, 82.907803]);
//   });
//   cityList.get(3)
//     .events.add('click', function () {
//     myMap.setCenter([40.695537, -73.97552]);
//   });
//   myMap.controls.add(cityList, {
//     floatIndex: 0
//   });
//
//   listBoxControl.events.add(['select', 'deselect'], function(e) {
//     let listBoxItem = e.get('target');
//     let filters = ymaps.util.extend({}, listBoxControl.state.get('filters'));
//     filters[listBoxItem.data.get('content')] = listBoxItem.isSelected();
//     listBoxControl.state.set('filters', filters);
//   });
//
//   let filterMonitor = new ymaps.Monitor(listBoxControl.state);
//   filterMonitor.add('filters', function(filters) {
//     objectManager.setFilter(getFilterFunction(filters));
//   });
//
//   function getBand(e, i, a){
//     let Band = this.valueOf();
//     return e === Band;
//   }
//
//   function getFilterFunction(categories){
//     return function(obj){
//       let bsBands = obj.has_bands;
//       let has2G = bsBands.find(getBand, '2G');
//       let has3G = bsBands.find(getBand, '3G');
//       let has4G = bsBands.find(getBand, '4G');
//       return (categories['2G'] && has2G) || (categories['3G'] && has3G) || (categories['4G'] && has4G);
//     }
//   }
//
//   let data = {
//     "count": 4,
//     "next": null,
//     "previous": null,
//     "type": "FeatureCollection",
//     "features": [
//       {
//         "id": 1,
//         "region_prefix": "97",
//         "cell_site_number": 1,
//         "description": "",
//         "address": "",
//         "commissioning": "",
//         "bs_id": "",
//         "height_asl": 0,
//         "bands": [
//           {
//             "name": "2G",
//             "frequency": "900"
//           },
//           {
//             "name": "2G",
//             "frequency": "1800"
//           }
//         ],
//         "status": true,
//         "type": "Feature",
//         "geometry": {
//           "type": "Point",
//           "coordinates": [55.755815, 37.613],
//           "preset": "islands#redIcon",
//         },
//         "properties": {
//           "balloonContentHeader": "balloonContentHeader",
//           "balloonContentBody": "balloonContentBody",
//           "balloonContentFooter": "balloonContentFooter",
//           "clusterCaption": "clusterCaption",
//           "hintContent": "hintContent",
//
//           "iconCaption": "2G"
//         },
//         "options": {
//           "preset": "islands#violetDotIcon"
//         },
//         "has_bands": [
//           "2G"
//         ]
//       },
//       {
//         "id": 2,
//         "region_prefix": "97",
//         "cell_site_number": 2,
//         "description": "",
//         "address": "",
//         "commissioning": "",
//         "bs_id": "",
//         "height_asl": 0,
//         "bands": [
//           {
//             "name": "2G",
//             "frequency": "900"
//           },
//           {
//             "name": "2G",
//             "frequency": "1800"
//           },
//           {
//             "name": "3G",
//             "frequency": "2100"
//           },
//           {
//             "name": "4G",
//             "frequency": "1800"
//           },
//           {
//             "name": "4G TDD",
//             "frequency": "2600"
//           }
//         ],
//         "status": true,
//         "type": "Feature",
//         "geometry": {
//           "type": "Point",
//           "coordinates": [55.759, 37.613]
//         },
//         "properties": {
//           "balloonContentHeader": "balloonContentHeader",
//           "balloonContentBody": "balloonContentBody",
//           "balloonContentFooter": "balloonContentFooter",
//           "clusterCaption": "clusterCaption",
//           "hintContent": "hintContent",
//           "iconCaption": "2G 3G 4G"
//         },
//         "has_bands": [
//           "3G",
//           "2G",
//           "4G"
//         ]
//       },
//       {
//         "id": 3,
//         "region_prefix": "97",
//         "cell_site_number": 3,
//         "description": "",
//         "address": "",
//         "commissioning": "",
//         "bs_id": "",
//         "height_asl": 0,
//         "bands": [
//           {
//             "name": "3G",
//             "frequency": "2100"
//           }
//         ],
//         "status": true,
//         "type": "Feature",
//         "geometry": {
//           "type": "Point",
//           "coordinates": [55.7204, 37.6167]
//         },
//         "properties": {
//           "balloonContentHeader": "balloonContentHeader",
//           "balloonContentBody": "balloonContentBody",
//           "balloonContentFooter": "balloonContentFooter",
//           "clusterCaption": "clusterCaption",
//           "hintContent": "hintContent",
//           "iconCaption": "3G"
//         },
//         "has_bands": [
//           "3G",
//         ]
//       },
//       {
//         "id": 4,
//         "region_prefix": "97",
//         "cell_site_number": 4,
//         "description": "",
//         "address": "",
//         "commissioning": "",
//         "bs_id": "",
//         "height_asl": 0,
//         "bands": [
//           {
//             "name": "4G",
//             "frequency": "1800"
//           },
//           {
//             "name": "4G TDD",
//             "frequency": "2600"
//           }
//         ],
//         "status": true,
//         "type": "Feature",
//         "geometry": {
//           "type": "Point",
//           "coordinates": [55.7704, 37.6119]
//         },
//         "properties": {
//           "balloonContentHeader": "balloonContentHeader",
//           "balloonContentBody": "balloonContentBody",
//           "balloonContentFooter": "balloonContentFooter",
//           "clusterCaption": "clusterCaption",
//           "hintContent": "hintContent",
//           "iconCaption": "4G"
//         },
//         "has_bands": [
//           "4G"
//         ]
//       }]}
//   objectManager.add(data);
// }

