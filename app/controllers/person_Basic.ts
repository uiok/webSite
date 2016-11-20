import { Component } from  '@angular/core';
import { Tab } from './tab';

@Component({
	selector:"ng-content",
	templateUrl:"./app/views/person/basic.html"
})

export class BasicComponent implements Tab {
	//not-work
	title = "test";
	active = true;
} 