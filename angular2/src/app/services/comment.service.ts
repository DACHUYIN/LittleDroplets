import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Comment } from '../models/comment';

@Injectable()
export class CommentService {

    constructor(private http: Http) { }

    addComment(comment: Comment) {
        const tokenUrl1 = 'http://localhost:8080/rest/comment/add';
        const headers1 = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token') });
        console.log(JSON.stringify(comment));
        return this.http.post(tokenUrl1, JSON.stringify(comment), { headers: headers1 });
    }
}
