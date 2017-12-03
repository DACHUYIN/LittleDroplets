import { Component } from '@angular/core';
import { User } from '../models/user';
import { RegisterService } from '../services/register.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
// tslint:disable-next-line:component-class-suffix
export class Register {
    newUser: User = new User();
    registered = false;

    constructor(private registerService: RegisterService) {
    }

    onSubmit() {
        console.log('submit test');
        this.registerService.sendUser(this.newUser)
        .then(
          () => {
            this.registered = true;
            this.newUser = new User();
          },
          error => console.log(error)
        );
    }
}
