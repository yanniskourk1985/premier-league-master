import { Component } from '@angular/core';
import { User } from '../model';

@Component({
    moduleId: module.id,
    selector: 'premier-form',
    templateUrl: 'premier-form.component.html'
})

export class PremierFormComponent {

    newUser: new User('', 0, '');
    console.log('');
}
