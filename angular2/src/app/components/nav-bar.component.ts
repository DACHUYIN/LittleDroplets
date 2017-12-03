import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'nav-bar',
    templateUrl: './nav-bar.component.html'
})
// tslint:disable-next-line:component-class-suffix
export class NavBar {
    myLocalStorage;

    constructor(private loginService: LoginService) {
        this.myLocalStorage = localStorage;
    }

    onclick() {
        this.loginService.logout();
    }
}
