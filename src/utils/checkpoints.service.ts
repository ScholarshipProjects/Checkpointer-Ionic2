import { Injectable } from '@angular/core';
import { Geolocation } from 'ionic-native';


import { Checkpoint } from '../shared/checkpoint';

@Injectable()
export class CheckpointsService {

    checkpoints: Checkpoint[];

    constructor() {
        this.checkpoints = [];

        // Generate some checkpoints
        // for (let i = 0; i < 2; i++) {

        //     this.checkpoints.push(new Checkpoint('Test Checkpoint', '123', '456'));
        // }
    }



    getCheckpoints() {
        console.log(this.checkpoints);
    }

    add(checkpoint: Checkpoint) {
        this.checkpoints.push(checkpoint);
    }

    remove(checkpoint: Checkpoint) {
        // TODO Remove checkpoint
    }

    location() {
        Geolocation.getCurrentPosition().then((resp) => {
            return resp.coords.latitude;
        }).catch((error) => {
            console.log('Error getting location', error);
            return null;
        });
    }


}