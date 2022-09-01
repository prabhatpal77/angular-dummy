import { Injectable } from '@angular/core';


interface dataType{
  name:string,
  id:number,
  india:string,
  address:any
}
@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor() { }
  getData(){
    const data:dataType={
      name:'anil kumar',
      id:100,
      india:"yes",
      address:"42, noida, up"
    }
    return data;

    // We can use this interface any where or any component
  }
}
