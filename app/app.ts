import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';
import { AppComponent }       from './controllers/root';
import { FormsModule }        from '@angular/forms';
import { IndexComponent }     from './controllers/index';
import { LoginComponent } 	  from './controllers/loginPartial';
@NgModule({
  imports: [ BrowserModule,  FormsModule ],
  declarations: [
    AppComponent, IndexComponent,LoginComponent
  ],
  providers: [  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/