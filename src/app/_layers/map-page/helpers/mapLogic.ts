import {map} from 'rxjs/operators';

export function initMap() {
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
      map(this.driver.driverForDistricts.bind(this))
    )
    .subscribe((districts: []) => {
      this.districts = districts
      this.showDistricts(districts)
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
    this.showDistricts(this.districts)
  });
  select2.events.add('select', () => {
    select1.deselect()
    this.showPlacemarks()
  });
  this.map.controls.add(cityList);
}
