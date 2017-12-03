import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { User } from '../models/user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RegisterService {

    private url = 'http://localhost:8080/user/register';
    private headers1 = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }
    sendUser(user: User): Promise<User> {
        return this.http.post(this.url, JSON.stringify(user), { headers: this.headers1 })
        .toPromise().then(() => null);
    }
}

