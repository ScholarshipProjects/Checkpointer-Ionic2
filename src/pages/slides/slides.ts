import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { LoginPage } from '../login/login';


@Component({
    selector: 'page-slides',
    templateUrl: 'slides.html'
})
export class SlidesPage {
    constructor(public navCtrl: NavController) {

    }

    navigateToLogin() {
        this.navCtrl.setRoot(LoginPage);
    }
    slides = [
        {
            title: "Welcome to the Checkpointer App!",
            description: "This is the first non functional version of the app. The app is currently in progress.",
            image: "assets/images/slides/ica-slidebox-img-1.png",
        },
        {
            title: "What is the Checkpointer app ?",
            description: "<b>The Checkpointer app </b> is a simple app for giving tasks to other people using the <b>Ionic 2</b>platform and the <b>Google Maps</b> native api.",
            image: "assets/images/slides/ica-slidebox-img-2.png",
        }
    ];
}