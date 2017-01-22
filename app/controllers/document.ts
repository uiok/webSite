import { Component, OnInit } from '@angular/core';

@Component({
selector:"documentList",
 templateUrl:"./app/views/document/list.html"
})

export class DocumentComponent implements OnInit {
	documents: any;
	ngOnInit(): void {
	    this.documents = []

	    for (var i = 0; i < 5; i++) {
	    	this.documents.push({value:i,text:"測試"+i})
	    }
	}
}