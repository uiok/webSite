import { Component, Input ,OnInit} from '@angular/core';
import { BasicComponent } from './person_Basic';
@Component({
  selector: 'tab',
  styles: ['.pane{padding: 1em;}'],
  template:'<div [hidden]="!active" class="pane"><ng-content></ng-content></div>',    
})

export class Tab implements OnInit{
	//not-work
	@Input('tabTitle') title: string;
	@Input() active = false;
	ngOnInit(){
		this.title = 'Basic';
	}
	
}

