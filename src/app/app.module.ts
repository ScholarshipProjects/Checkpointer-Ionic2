import { CheckpointsService } from '../utils/checkpoints.service';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';

import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { CheckpointsPage } from '../pages/checkpoints/checkpoints';
import { MapPage } from '../pages/map/map';
import { LoginPage } from '../pages/login/login';
import { SettingsPage } from '../pages/settins/settings';
import { SlidesPage } from '../pages/slides/slides';

import { AuthService } from '../utils/auth.service';


@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    CheckpointsPage,
    MapPage,
    LoginPage,
    SettingsPage,
    SlidesPage
  ],
  imports: [

    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    CheckpointsPage,
    MapPage,
    LoginPage,
    SettingsPage,
    SlidesPage
  ],
  providers: [
    CheckpointsService,
    AuthService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
