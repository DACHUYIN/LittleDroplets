import { Component } from '@angular/core';
import { Photo } from '../models/photo';
import { UploadPhotoService } from '../services/upload-photo.service';
import { AddPhotoService } from '../services/add-photo.service';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'add-photo',
    templateUrl: './add-photo.component.html'
})
// tslint:disable-next-line:component-class-suffix
export class AddPhoto {
    newPhoto: Photo = new Photo();
    photoAdded = false;
    user: User;

    constructor(private uploadPhotoService: UploadPhotoService, private addPhotoService: AddPhotoService,
        private userService: UserService) { }

    onSubmit() {
        this.userService.getUserByName(localStorage.getItem('currentUserName')).subscribe(
            user => {
                this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
                console.log(this.user);
                this.newPhoto.user = this.user;
                this.addPhotoService.sendPhoto(this.newPhoto)
                    .subscribe(
                    data => {
                        this.photoAdded = true;
                        this.newPhoto = new Photo();
                    },
                    error => console.log(error)
                    );
            },
            error => console.log(error)
        );
    }
}
