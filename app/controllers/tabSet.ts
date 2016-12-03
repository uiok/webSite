import { Component ,AfterContentInit ,ContentChildren ,QueryList,Input} from  '@angular/core';
import {Tab} from './tab';
import {wordService} from '../service/wordService';

@Component({
  selector: 'tabs',
  providers: [wordService],
  template:`
    <ul class="nav nav-tabs">
      <li *ngFor="let tab of tabs" (click)="selectTab(tab)" [class.active]="tab.active">
        <a>{{tab.title}}</a>
      </li>
    </ul>
    <ng-content></ng-content>
  `
})

export class Tabs implements AfterContentInit {
  
  @ContentChildren(Tab) tabs: QueryList<Tab>;  
  public _wordService: wordService;
  constructor(){
      this._wordService = new wordService();
  }
  ngOnInit(initTile : string[]){
   // this._self._titleList =  ["最新消息","課程分類"];
  }
  // contentChildren are set
  ngAfterContentInit() {
    // get all active tabs
    let activeTabs = this.tabs.filter((tab)=>tab.active);
    
    // if there is no active tab set, activate the first
    if(activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
    console.log(this._wordService.indexTabList + "123")
    this.initTitle();
  }
  
  selectTab(tab: Tab){
    // deactivate all tabs
    this.tabs.toArray().forEach(tab => tab.active = false);
    // activate the tab the user has clicked on.
    tab.active = true;
  }
  initTitle(){
      for (var i = 0; i < this.tabs.length; i++) {
        console.log(this._wordService.indexTabList)
        this.tabs.toArray()[i].title = this._wordService.indexTabList[i]
    }
  }
}
