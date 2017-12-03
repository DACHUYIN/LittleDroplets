import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { Photo } from '../models/photo';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'photo-row',
    templateUrl: './photo-row.component.html'
})
// tslint:disable-next-line:component-class-suffix
export class PhotoRow {
    photoList: Photo[];
    photoListSorted: Photo[];
    photoListRanked: Photo[];

    constructor(private photoService: PhotoService) {
        this.photoService.getPhotos().subscribe(
            data => {
                this.photoList = JSON.parse(JSON.parse(JSON.stringify(data))._body);
                this.photoListSorted = this.photoList.sort((a, b) => b.likes - a.likes);

                this.photoListRanked = [];

                for (const index in this.photoListSorted) {
                    if (Number(index) < 3) {
                        this.photoListRanked.push(this.photoListSorted[index]);
                    } else {
                        break;
                    }
                }
            },
            error => console.log(error)
        );
    }
}
