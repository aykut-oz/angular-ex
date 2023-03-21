import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(){
    const movies=[
      {id:1,name:'Movie 1',description:"Yeni Film 1",imageUrl:"1.jpeg"},
      {id:2,name:'Movie 2',description:"Yeni Film 2",imageUrl:"2.jpeg"},
      {id:3,name:'Movie 3',description:"Yeni Film 3",imageUrl:"3.jpeg"},
      {id:4,name:'Movie 4',description:"Yeni Film 4",imageUrl:"4.jpeg"},
      {id:5,name:'Movie 5',description:"Yeni Film 5",imageUrl:"5.jpeg"}
  ];
  return {movies};
  }

  constructor() { }
}
