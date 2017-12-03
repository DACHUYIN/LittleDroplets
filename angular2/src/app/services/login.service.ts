import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {
    token: string;

    constructor(private http: Http) { }

    sendCredential(model) {
        const tokenUrl1 = 'http://localhost:8080/user/login';
        const headers1 = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(tokenUrl1, JSON.stringify(model), { headers: headers1 });
    }

    sendToken(token) {
        const tokenUrl2 = 'http://localhost:8080/rest/user/users';
        console.log('Bearer ' + token);
        const getHeaders = new Headers({ 'Authorization': 'Bearer ' + token });
        return this.http.get(tokenUrl2, { headers: getHeaders });
    }

    logout() {
        localStorage.setItem('token', '');
        localStorage.setItem('currentUserName', '');
        alert('You just logged out.');
    }

    checkLogin() {
        if (localStorage.getItem('currentUserName') !== null && localStorage.getItem('currentUserName') !== ''
            && localStorage.getItem('token') !== null && localStorage.getItem('token') !== '') {
            console.log(localStorage.getItem('currentUserName'));
            console.log(localStorage.getItem('token'));
            return true;
        } else {
            return false;
        }
    }
}
