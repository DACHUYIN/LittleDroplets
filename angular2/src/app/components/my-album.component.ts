import { Component, Input } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { Photo } from '../models/photo';
import { Router } from '@angular/router';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'my-album',
    templateUrl: './my-album.component.html',
    styleUrls: ['./my-album.component.css']
})
// tslint:disable-next-line:component-class-suffix
export class MyAlbum {

    private photos: Photo[];
    private user;
    private selectedPhoto: Photo;

    constructor(private photoService: PhotoService, private router: Router, private userService: UserService) {
        this.userService.getUserByName(localStorage.getItem('currentUserName')).subscribe(
            user => {
                this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
                console.log(this.user);
                this.photoService.getPhotosByUser(this.user).subscribe(
                    photos => {
                        console.log(this.photos = JSON.parse(JSON.parse(JSON.stringify(user))._body).photoList);
                    },
                    error => console.log(error)
                );
            },
            error => console.log(error)
        );
    }

    onSelect(photo: Photo) {
        this.selectedPhoto = photo;
        this.router.navigate(['/image-detail', this.selectedPhoto.photoId]);
    }
}
