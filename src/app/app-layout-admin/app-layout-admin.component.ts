import { Component } from '@angular/core';
import { Model } from '../models/model';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {far} from '@fortawesome/free-regular-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-layout-admin',
  templateUrl: './app-layout-admin.component.html',
  styleUrls: ['./app-layout-admin.component.css']
})
export class AppLayoutAdminComponent {
  model = new Model();

  constructor(
    library: FaIconLibrary,
 ) {
   library.addIconPacks(fas, far);
 }
  getName(){
    return this.model.user;
  }
  getItems(){
    return this.model.items;
  }
}
