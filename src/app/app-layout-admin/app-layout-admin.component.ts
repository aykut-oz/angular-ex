import { Component } from '@angular/core';
import { Model } from '../models/model';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {far} from '@fortawesome/free-regular-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';
import { TodoItem } from '../models/todoitem';

@Component({
  selector: 'app-layout-admin',
  templateUrl: './app-layout-admin.component.html',
  styleUrls: ['./app-layout-admin.component.css']
})
export class AppLayoutAdminComponent {
  model = new Model();
  isDisplay=false;

  constructor(
    library: FaIconLibrary,
 ) {
   library.addIconPacks(fas, far);
 }
  getName(){
    return this.model.user;
  }
  getItems(){
    if(this.isDisplay) {
      return this.model.items;
    }
    return this.model.items.filter(x=>!x.action);
  }

  getPassiveItems(){
    return this.model.items.filter(x=>x.action);
  }

  addItem(value: string){
    if(value!="")   {
      this.model.items.push(new TodoItem(value,false))
    } 
  }

  removeItem(value:string){
    this.model.items.splice(this.model.items.findIndex(x=>x.description==value),1);

  }
}
