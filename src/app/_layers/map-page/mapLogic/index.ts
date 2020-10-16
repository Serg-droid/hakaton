import Map, {getInfoFromServer} from './Map';
const map = new Map()
map.init()

getInfoFromServer('whatToGet', (response) => {
  map.add(response).setInto('claster')
  map.objects['claster'].listen('click', (e) => {
    map.objects['claster'].changeState({
      style: {

      },

    })
  })

  map.objects['claster'].listen('drop', (e) => {
    map.objects['claster'].changeState({
      style: {

      },

    })
  })

  map.objects.forEach(obj => obj.changeState({

  }))

  map.objects.forEach(obj => obj.listen('sthg', (e) => {

  }))
})

getInfoFromServer('anotherThingToGet', (response) => {

})

//   (url, {q: regionName, format: "json", polygon_geojson: 1})
//     .then(function (data) {
//       $.each(data, function(ix, place) {
//         if ("relation" == place.osm_type) {
// // 2. Создаем полигон с нужными координатами
//           var p = new ymaps.Polygon(place.geojson.coordinates);
// // 3. Добавляем полигон на карту
//           map.geoObjects.add(p);
//         }
//       });
//     }, function (err) {
//       console.log(err);
//     });


  //   // Создание карты.
  //   // var pointA = [55.749, 37.524],
  //   //   pointB = "Москва, Красная площадь",
  //     /**
  //      * Создаем мультимаршрут.
  //      * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/multiRouter.MultiRoute.xml
  //      */
  //     // multiRoute = new window['ymaps'].multiRouter.MultiRoute({
  //     //   referencePoints: [
  //     //     pointA,
  //     //     pointB
  //     //   ],
  //     //   params: {
  //     //     //Тип маршрутизации - пешеходная маршрутизация.
  //     //     routingMode: 'pedestrian'
  //     //   }
  //     // }, {
  //     //   // Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
  //     //   boundsAutoApply: true
  //     // });
  //

  //   // myMap.geoObjects.add(multiRoute);
  //
  //   const myPolygon = new this.ymaps.Polygon([], {}, {
  //     // Курсор в режиме добавления новых вершин.
  //     editorDrawingCursor: "crosshair",
  //     // Максимально допустимое количество вершин.
  //     editorMaxPoints: 5,
  //     // Цвет заливки.
  //     fillColor: '#00FF00',
  //     // Цвет обводки.
  //     strokeColor: '#0000FF',
  //     // Ширина обводки.
  //     strokeWidth: 5
  //   });
  //   // Добавляем многоугольник на карту.
  //   myMap.geoObjects.add(myPolygon);
  //
  //   var stateMonitor = new this.ymaps.Monitor(myPolygon.editor.state);
  //   stateMonitor.add("drawing", function (newValue) {
  //     myPolygon.options.set("strokeColor", newValue ? '#FF0000' : '#0000FF');
  //   });
  //
  //   // Включаем режим редактирования с возможностью добавления новых вершин.
  //   myPolygon.editor.startDrawing();


  // const myMap = new ymaps.Map("map", {
  //   center: [55.73, 37.75],
  //   zoom: 10
  // }, {
  //   searchControlProvider: 'yandex#search'
  // });
  //
  // // Создаем многоугольник без вершин.
  // const myPolygon = new ymaps.Polygon([], {}, {
  //   // Курсор в режиме добавления новых вершин.
  //   editorDrawingCursor: "crosshair",
  //   // Максимально допустимое количество вершин.
  //   editorMaxPoints: 5,
  //   // Цвет заливки.
  //   fillColor: '#00FF00',
  //   // Цвет обводки.
  //   strokeColor: '#0000FF',
  //   // Ширина обводки.
  //   strokeWidth: 5
  // });
  // // Добавляем многоугольник на карту.
  // myMap.geoObjects.add(myPolygon);
  //
  // // В режиме добавления новых вершин меняем цвет обводки многоугольника.
  // // const stateMonitor = new this.ymaps.Monitor(myPolygon.editor.state);
  // // stateMonitor.add("drawing", function(newValue) {
  // //   myPolygon.options.set("strokeColor", newValue ? '#FF0000' : '#0000FF');
  // // });
  // //
  // // // Включаем режим редактирования с возможностью добавления новых вершин.
  // // myPolygon.editor.startDrawing();

