import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Tabs} from './tabSet';
import {wordService} from '../service/wordService';

@Component({
  selector: 'bodyContent',
  templateUrl: './app/views/index.html',  
  providers: [wordService,Tabs]
})

export class IndexComponent implements OnInit {
	
	constructor(private wordService:wordService){
		//var titleList : string[] = ["最新消息","課程分類"];
		//tab.ngOnInit(titleList)
		// this._titleList = ["最新消息","課程分類"];
		//tab.initTitle(["最新消息","課程分類"])
		wordService.indexTabList = ["最新消息","課程分類"];
		
	}
	ngOnInit() {
		
		console.log("Index");
	}
}

@Component({
	selector:'newsList',
	templateUrl:'./app/views/index/newList.html'

})

export class NewListComponent implements OnInit {
	 newsData:number[] = [1, 2, 3];
	constructor(){
		//private _http: Http
		//toDo api and remove to service
		//this._http.get(this._carsUrl).map(res => res.json());
	}
	ngOnInit() {
		console.log("New");
	}
}

@Component({
	selector:'courseList',
	templateUrl:'./app/views/index/courseList.html'

})

export class CourseListComponent implements OnInit {

	constructor(){

	}
	ngOnInit() {
		console.log("Course");
	}
}


