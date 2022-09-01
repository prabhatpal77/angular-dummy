import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
url="http://localhost:3000/users"
  constructor() { }
  users{
    return this.http.get(this.url);
  }

  users2(){
    return[
      {name:'Anil', age:28, email:'anil@test.com'},
      {name:'sam', age:59, email:'sam@test.com'},
      {name:'peter', age:08, email:'peter@test.com'},
    ]
  }
  
  saveUsers(data:any){
    return this.help(this.url,data);
  }
}

