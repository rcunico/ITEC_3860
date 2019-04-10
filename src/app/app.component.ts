import {Component, OnInit} from '@angular/core';
import { Marker } from './marker';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})

export class AppComponent implements OnInit {
  title = 'My first AGM project';
  newMarker2: Marker;
  lat: number = 33.980212;
  lng: number = -84.004298;
  newMarker: Marker;



  ngOnInit(): void {
    createMarkers();
  }
}

function createMarkers(): void {
  this.newMarker = JSON.parse('{"id": 1, "lat": 33.979611, "lng": -84.004950}');
  this.newMarker2.lat = this.newMarker.lat;
  this.newMarker2.lng = this.newMarker.lng;
}
  // lat: number = 51.678418;
  // lng: number = 7.809007;
  // indivMarker: Marker;
  // marker: Marker[] = [{id: 1, lat: 52.678418, lng: 7.809007}, {id: 2, lat: 52.678418, lng: 6.809007},
  //   {id: 3, lat: 52.778418, lng: 7.909007}];

  // getMarker() {
  //   var newMarker = JSON.parse('{id: 1, lat: 52.678418, lng: 7.809007}');
  //   this.newMarker2.lat = newMarker.lat;
  //   this.newMarker2.lng = newMarker.lng;
  // }

