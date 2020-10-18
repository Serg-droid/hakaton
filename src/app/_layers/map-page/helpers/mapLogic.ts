import {map} from 'rxjs/operators';

export function initMap_() {
  // инициализация карты
  this.map = new this.ymaps.Map('map', {
    center: [55.755826,37.61730],
    zoom: 10,
    controls: ['typeSelector', 'geolocationControl', 'zoomControl'],
  }, {
    minZoom: 9,
    restrictMapArea: [[54.9, 36.3], [56.2, 38.8]],
    suppressMapOpenBlock: true
  })

  // загрузка и отображение районов
  this.load.getDistricts()
    .pipe(
      map(this.driver.driverForDistricts)
    )
    .subscribe((districts: []) => {
      this.districts = districts
      showDistricts_.call(this, districts)
    })

  // добавление контроллеров
  const cityList = new this.ymaps.control.ListBox({
    data: {
      content: 'Выберите режим отображения',
      image: '/assets/images/map/icons/list.png'
    },
    items: [
      new this.ymaps.control.ListBoxItem({
        data: {
          content: 'Границы районов'
        },
        state: {
          selected: true
        }
      }),
      new this.ymaps.control.ListBoxItem('Метки'),
    ],
    options: {
      maxWidth: [100, 160, 185]
    }
  });

  const select1 = cityList.get(0),
        select2 = cityList.get(1)

  select1.events.add('select', () => {
    select2.deselect()
    this.showDistricts_.call(this, this.districts)
  });
  select2.events.add('select', () => {
    select1.deselect()
    showPlacemarks_.call(this)
  });

  this.map.controls.add(cityList);
}

function showDistricts_(districts: []) {
  if(this.placemarksCluster) {
    this.placemarksCluster.removeAll()
  }
  if(this.districtsManager) {
    this.districtsManager.removeAll()
  }

  this.districtsManager = new this.ymaps.ObjectManager()
  this.districtsManager.add(districts)
  this.map.geoObjects.add(this.districtsManager)

  this.districtsManager.objects.events.add('mouseenter', (e) => {
    const objectId = e.get('objectId')
    const overlay = this.districtsManager.objects.overlays.getById(objectId)
    overlay.options.set('opacity', 0.8)
  })
  this.districtsManager.objects.events.add('mouseleave', (e) => {
    const objectId = e.get('objectId')
    const overlay = this.districtsManager.objects.overlays.getById(objectId)
    overlay.options.set('opacity', 0.3)
  })
}

function showPlacemarks_() {
  if(this.districtsManager) {
    this.districtsManager.removeAll()
  }
  if(this.placemarksCluster) {
    this.placemarksCluster.removeAll()
  }

  this.placemarksCluster = new this.ymaps.Clusterer({
    // Макет метки кластера pieChart.
    clusterIconLayout: 'default#pieChart',
    // Радиус диаграммы в пикселях.
    clusterIconPieChartRadius: 25,
    // Радиус центральной части макета.
    clusterIconPieChartCoreRadius: 10,
    // Ширина линий-разделителей секторов и внешней обводки диаграммы.
    clusterIconPieChartStrokeWidth: 3,
    // Определяет наличие поля balloon.
    hasHint: false,
    clusterDisableClickZoom: true
  })

  this.load.getPlaces()
    .pipe(
      map(this.driver.driverForPoints)
    )
    .subscribe(points => {

      this.points = points
      const placemarks = this.points.map(p => new this.ymaps.GeoObject(...p))

      this.placemarksCluster.add(placemarks);
      this.map.geoObjects.add(this.placemarksCluster);
      this.map.setBounds(this.placemarksCluster.getBounds(), {
        checkZoomRange: true
      });
      this.map.geoObjects.add(this.placemarksCluster)
    })

}
