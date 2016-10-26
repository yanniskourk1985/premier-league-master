import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { PremierFormComponent } from './premier-form.component';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [ AppComponent, PremierFormComponent  ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
