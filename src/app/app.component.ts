import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { CheckpointsPage } from '../pages/checkpoints/checkpoints';
import { MapPage } from '../pages/map/map';
import { LoginPage } from '../pages/login/login';
import { SettingsPage } from '../pages/settins/settings';
import { SlidesPage } from '../pages/slides/slides';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = SlidesPage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      // { title: 'Login', component: LoginPage },
      { title: 'Home', component: Page1 },
      { title: 'Settings', component: SettingsPage },

      // { title: 'Page Two', component: Page2 },
      // { title: 'Checkpoints', component: CheckpointsPage },
      // { title: 'Map', component: MapPage }

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout() {
    this.nav.setRoot(LoginPage);
  }
}
