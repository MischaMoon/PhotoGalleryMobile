import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  photogallery: any;
  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.getPhotos();
  }

  getPhotos() {
    this.restProvider.getPhotoGallery()
      .then(data => {
        this.photogallery = data;
        console.log(this.photogallery);
      });
  }
}
