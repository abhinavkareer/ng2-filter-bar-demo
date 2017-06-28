import { Component } from '@angular/core';
import {FilterConfig} from 'ng2-filter-bar';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  cntr=4;
  filtersConfig:Array<FilterConfig>=[
    {key:"1",name:"AppName"},
    {key:"2",name:"Init IP"},
    {key:"3",name:"Resp IP"},
    {key:"4",name:"AppName"},
    {key:"5",name:"Init IP"},
    {key:"6",name:"Resp IP"},
    {key:"7",name:"AppName"},
    {key:"8",name:"Init IP"},
    {key:"9",name:"Resp IP"},
    {key:"10",name:"AppName"},
    {key:"11",name:"Init IP"},
    {key:"12",name:"Resp IP"},
  				];


          onFilterUpdate(event){
            console.log("filte updated:",event);

          }
}
