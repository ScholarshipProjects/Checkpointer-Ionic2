import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { GoogleMap, GoogleMapsEvent, GoogleMapsLatLng, GoogleMapsMarkerOptions, GoogleMapsMarker } from 'ionic-native';

@Component({
  selector: 'map-page',
  templateUrl: 'map.html'
})
export class MapPage {

  map: GoogleMap;
  markers: GoogleMapsMarkerOptions[];
  params1: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform) {
    platform.ready().then(() => {
      this.loadMap();
    });
    this.params1 = navParams.get('params1')
  }

  ionViewDidEnter() {
    // Add the marker after entering the view
    this.addMarker(this.params1.title);
  }

  ionViewDidLeave() {
    // Clear the map after leaving the view.
    this.map.clear();
  }

  addMarker(title) {
    let markerOptions: GoogleMapsMarkerOptions = {
      position: new GoogleMapsLatLng(42.6857 + Math.random(), 23.3197 + Math.random()),
      title: title
    };

    this.map.addMarker(markerOptions);
  }
  loadMap() {

    let location = new GoogleMapsLatLng(42.6857, 23.3197);

    this.map = new GoogleMap('map', {
      'backgroundColor': 'white',
      'controls': {
        'compass': true,
        'myLocationButton': true,
        'indoorPicker': true,
        'zoom': true
      },
      'gestures': {
        'scroll': true,
        'tilt': true,
        'rotate': true,
        'zoom': true
      },
      'camera': {
        'latLng': location,
        'tilt': 30,
        'zoom': 8,
        'bearing': 50
      }
    });


    // this.markers = [];

    // for (let index = 0; index < 10; index++) {

    //   let markerOptions: GoogleMapsMarkerOptions = {
    //     position: new GoogleMapsLatLng(42.6857 + Math.random(), 23.3197 + Math.random()),
    //     title: `Task #${index}`
    //   };

    //   this.markers.push(markerOptions)

    // }




    this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {


      // for (let index = 0; index < this.markers.length; index++) {
      //   let currentMarker = this.markers[index];
      //   this.map.addMarker(currentMarker)
      //     .then((marker: GoogleMapsMarker) => {
      //       marker.showInfoWindow();
      //       marker.addEventListener(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      //         // alert(`Marker with index : ${index} clicked`);

      //       });
      //     });
      // }


      console.log('Map is ready!');
    });

  }
}