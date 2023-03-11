import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-admin',
  templateUrl: './app-layout-admin.component.html',
  styleUrls: ['./app-layout-admin.component.css']
})
export class AppLayoutAdminComponent {
  items=[
    {description:"Kahvaltı",action:"No"},
    {description:"Ödev",action:"No"},
    {description:"Temizlik",action:"No"},
    {description:"İş",action:"No"}
  ];
}
