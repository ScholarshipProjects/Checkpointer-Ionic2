import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-settings',
    templateUrl: 'settings.html'
})
export class SettingsPage {
    distance: any;

    constructor(public navCtrl: NavController) {

        this.distance = 11;
    }


}