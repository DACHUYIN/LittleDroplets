import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LoginService } from '../services/login.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
// tslint:disable-next-line:component-class-suffix
export class Login {
    private model = { 'username': '', 'password': '' };
    private currentUserName;

    constructor(private loginService: LoginService) {
        this.currentUserName = localStorage.getItem('currentUserName');
    }

    onSubmit() {
        this.loginService.sendCredential(this.model).subscribe(
            data => {
                localStorage.setItem('token', JSON.parse(JSON.stringify(data))._body);
                this.loginService.sendToken(localStorage.getItem('token')).subscribe(
                    // tslint:disable-next-line:no-shadowed-variable
                    data => {
                        this.currentUserName = this.model.username;
                        localStorage.setItem('currentUserName', this.model.username);
                        this.model.username = '';
                        this.model.password = '';
                    },
                    error => console.log(error)
                );
            },
            error => console.log(error)
        );
    }
}
