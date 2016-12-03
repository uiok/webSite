import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';
import { AppComponent }       from './controllers/root';
import { FormsModule }        from '@angular/forms';
import { IndexComponent,NewListComponent,CourseListComponent }     from './controllers/index';
import { LoginComponent } 	  from './controllers/loginPartial';
import { NewsComponent } 	  from './controllers/news';
import { routing }      	  from './router/route';
import { PersonComponent }	  from './controllers/person';
import { BasicComponent }      	  from './controllers/person_Basic';
import { CertificateComponent }      	  from './controllers/person_Certificate';
import { RecordComponent }      	  from './controllers/person_Record';
import { TestRecordComponent }      	  from './controllers/person_TestRecord';
import { Tabs }      	  from './controllers/tabSet';
import { Tab }      	  from './controllers/tab';

@NgModule({
  imports: [ BrowserModule,  FormsModule, routing],
  declarations: [
    AppComponent, IndexComponent,LoginComponent,NewsComponent,BasicComponent,CertificateComponent,PersonComponent
    ,RecordComponent,TestRecordComponent,Tabs,Tab,NewListComponent,CourseListComponent
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