import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { User } from '../models/user';
import { Photo } from '../models/photo';
import { Router } from '@angular/router';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'photo-list',
    templateUrl: './photo-list.component.html'
})
// tslint:disable-next-line:component-class-suffix
export class PhotoList {
   photos: Photo[];
   selectedPhoto: Photo;
   router: Router;

   constructor(private photoService: PhotoService) {
    this.photoService.getPhotos().subscribe(
        data => console.log(this.photos = JSON.parse(JSON.parse(JSON.stringify(data))._body)),
        error => console.log(error)
      );
   }

   onSelect(photo: Photo) {
    this.selectedPhoto = photo;
    this.router.navigate(['/image-detail', this.selectedPhoto.photoId]);
  }
}
