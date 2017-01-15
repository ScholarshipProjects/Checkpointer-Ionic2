import { Checkpoint } from '../../shared/checkpoint';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from 'ionic-native';
import { Geolocation } from 'ionic-native';


import { CheckpointsService } from '../../utils/checkpoints.service';


@Component({
    selector: 'page-checkpoints',
    templateUrl: 'checkpoints.html'
})
export class CheckpointsPage {
    constructor(public navCtrl: NavController, private cs: CheckpointsService) { }

    scan() {
        BarcodeScanner.scan().then((barcodeData) => {
            // Success! Barcode data is here
            alert(barcodeData);
            console.log(barcodeData);
        }, (err) => {
            // An error occurred
            alert(err);
        });
    }

    getCheckpoints() {
        return this.cs.getCheckpoints();
    }

    addCheckpoint(checkpointName: String) {
        Geolocation.getCurrentPosition().then((resp) => {
            let currentCheckpoint: Checkpoint = new Checkpoint(checkpointName, resp.coords.latitude.toString(), resp.coords.longitude.toString());
            this.cs.add(currentCheckpoint);
        }).catch((error) => {
            console.log('Error getting location', error);
        });

    }


}