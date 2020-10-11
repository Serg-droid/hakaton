import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as L from 'leaflet'

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.scss']
})
export class MapPageComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {

    const map = L.map('map').setView([55.755826,37.61730], 12);
    L.tileLayer('http://{s}.tiles.maps.sputnik.ru/{z}/{x}/{y}.png').addTo(map);

    const southWest = L.latLng(55.3, 37.2),
      northEast = L.latLng(56.0, 38.05);
    const bounds = L.latLngBounds(southWest, northEast);

    map.setMaxBounds(bounds);
    map.on('drag', function() {
      map.panInsideBounds(bounds, { animate: false });
    });
  }

}
