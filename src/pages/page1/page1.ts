import { Component } from '@angular/core';

import {
  NavController,
  NavParams,
  ActionSheetController,
  Platform
} from 'ionic-angular';


import { MapPage } from '../map/map';


@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  selectedItem: NavParams;

  listItems: any = [];
  tasks: String[] = [
    "Deliver the goods",
    "Give the letter to someone",
    "Deliver the pizza",
    "Call for help",
    "Deliver the food"
  ];
  descriptions: String[] = [
    "Deliver the goods or I woun't be able to reach my robot expectations.",
    "I am too smart to go to this location so you do the hard work.",
    "Human you must deliver the goods there or else !",
    "I am half man and half human but my brain is artiticial so deliver the goods at this location.",
    "I am pregnant and can't afford to go out with my baby."
  ]
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    public platform: Platform
  ) {

    // Test map loading
    // platform.ready().then(() => {
    //   this.loadMap();
    // });

    this.selectedItem = navParams.get('item');




    console.log(this.selectedItem);


    // TODO generate more than 5 random strings
    for (let i = 0; i < 5; i++) {
      // TODO remove
      if (i > 4) {
        break;
      }

      // 42.6857, 23.3197
      let lat = 42.6857 + (Math.random() / 100);
      let lon = 23.3197 + (Math.random() / 100);
      this.listItems.push({
        id: i,
        name: this.tasks[i],
        avatar: 'assets/images/avatars/avatar (' + (i + 1) + ').png',
        description: this.descriptions[i],
        lat: lat.toFixed(6),
        lon: lon.toFixed(6),
        image: 'assets/images/card/random' + (i) + '.jpg',
        // TODO: Remove
        // Generate random time
        time: Date.now() + (i * 60 * 60 * 1000)
      })
    }
  }

  // window.open('geo://' + position.coords.latitude + ',' + position.coords.longitude + '?q=' + this.location.latitude + ',' + this.location.longitude + '(' + this.location.name + ')', '_system');

  openPage(item) {
    console.log('opened ?');
    this.navCtrl.push(Page1, {
      item: item
    });
  }
  openMapPage(markerData) {
    this.navCtrl.push(MapPage, {
      params1: markerData
    });
  }

}
