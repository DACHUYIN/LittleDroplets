import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Photo } from '../models/Photo';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AddPhotoService {
    constructor(private http: Http) { }

    sendPhoto(photo: Photo) {
        const url = 'http://localhost:8080/rest/photo/add';
        const headers1 = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token') });
        console.log(url);
        return this.http.post(url, JSON.stringify(photo), { headers: headers1 });
    }
}
