import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { UserdataService } from './services/userdata.service';
//import { Component, from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Interpolation:- Interpolation is used to display dynamic data on HTML page.
  title = 'Multiple condition or else-if If-else condition, switch case, For loop, nested for loop, Style Binding, Basic Form, toggle element, Todo list with angular, Reusable Component, Send data child to parent component, Two way binding, Template reference variable, Angular basic pipes, Angular Template Driven Form, Angular Reactive form, Angular Reactive Form, Service in angular';
  users=['Anil','Bhaskar','Sam','Peter','Bruce'];
  data=10
  today=Date()
  getUSerFormData(data:any){
    this.user.saveUsers(data),subscribe((result)=>{
      console.warn(result)
    })
  }
  constructor(private viewContainer: ViewContainerRef, private (fr:ComponentFactoryResolver)){ }
  private (fr:ComponentFactoryResolver){}
  async loadAdmin(){
    this.viewContainer.clear();
    const {AdminlistComponent} = await import('./adminlist/adminlist.component');
    this.viewContainer.CreateComponent(
      this.cfr.ComponentFactoryResolver(AdminlistComponent)
    )
  }
  async loadUser(){
    //as it is admin
  }
  memberData=[
    {
      name:'Anil', email:'anil@test.com'
    },
    {
      name:'sam', email:'sam@test.com'
    },
    {
      name:'Bhasker', email:'bhasker@test.com'
    }
  ]
  name:any;
  loginForm=new FormGroup({
    user:new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z+$]')]),
    password: new FormControl('',[Validators.required, Validators.minLength(5)]),
  }),
  user:new FormControl(''),
  password:new FormControl('')
  user={
    name:'Anil',
    age:28
  }
  userDetails=[
    {name:'Anil',email:'anil@test.com', phone:'8888'},
    {name:'Bhasker', email:'bhasker@gmail.com',phone:'1111'},
    {name:'Sam', email:'sam@gmail.com',phone:'2222'},
    {name:'Peter',email:'peter@test.com',phone:'1234'}
  ];
  users2=[
    {name:'Anil',phone:'1111',socielAccounts:['Facebook','insta','gmail']},
    {name:'sam',phone:'2222',socielAccounts:['youtube','insta','linkedin']},
    {name:'Peter',phone:'3333',socielAccounts:['yahoo','twitter','linkedin']},
    {name:'bbruce',phone:'4444',socielAccounts:['youtube','insta','linkedin']}
  ]
  color="green, red"
  bgColor='green'
  show="back"
  name="peter";
  display=true
  displayVal='';
  //13. Counter example
  //1. Make Button for counter
  //2. Make function for counter
  //3. Call function o button
  count =0 
  counter = (type:string){
    type==='add'? this.count++:this.count--;
    // If-else condition
    //1. Define property for if condition
    //2. Apply Basic if condition
    //3. How to use if-else condition
    


  }
  constructor(private userdata:UserdataService){

    this.userData.users().subscribe((data)=>
    {
      console.warn("data,data");
      this.users=data
    })
    this.users=userdata.users;
  }
  loginUser(){
    console.warn(this.loginForm.value);
  }
  userLogin(item:any){
    console.warn(item)
  }

  getVal(item:any){
    console.warn(item)
  }

  list:any[]=[];
  addTask(item:string){
    this.list.push({id:this.list.length, name:item});
    console.warn(this.list)
  }
  removeTask(id:number){
    console.log(id)
    this.list=this.list.filter(item=>item.id!==id)
  }
  toggle(){
    this.display=!this.display;
  }
  

  data = "Code step by step";
  getValue(val:string){
    console.warn(val)
    this.displayVal=val
    return "Get function data"
  }
  getName(){
    alert("Function called");
  }
  //11. Events |blur |keyup |mouseover etc.---
  // Important Events-- 
  // 1. Call function with different events
  // 2. Events with input box and get value
  // (keydown) = "getData(box1.value)"
  // (blur) //called when remove the focus
  
  getData(val:string){
    console.warn("function called")
  
  }
  //For loop
  //1. Make Array
  //2. Apply for loop on it
  //3. Make array of object
  //4. Apply loop on object's Array

  //20. Nested loop
  // 1. Make Array
  // 2. Apply for loop on it
  // 3. Make nested array
  // 4. Apply loop on nested array

  //21. Style Binding | Dynamic Style
  // 1. What is style binding 
  // 2. Apply style binding
  // 3. Update style on button click
  // 4. apply 2 style binding
updateColor(){
  this.color='blue'
  this.bgColor='red'
}

userData:any={};
    getData(data:NgForm){
      console.warn(data)
      this.userData=data
    }
    //24. Toggle Element | hide and show tag--->
    //1. Make HTML element and button
    //2. Define and apply property
    //3. update property for Toogle.

    updateChild(){
      this.data=Math.floor(Math.random()*10)
    
    //30. Send data child to parent component
    //1. Make child component
    //2. Use child component in parent component
    //3. Send function from parent component
    //4. Call function in child component
    //5. Get data in parent component

    
    }
    updateData(item:String){
      console.warn(item)
    }

    //33. Basic of TypeScript for angular
    //1. Basic Types
    //2. How to use types with property
    //3. Type with object and array
    //1. number, 2. String, 3. Boolean, 4. any, 5. define 2 types

    //35. Advance pipes
    //1. Params with pipes
    //2. Use 2 pipes at the same times
    //3. Number pipes
    //4. Slice pipe
    //5. Currency pipes

    //36. Custom pipes
    //1. Make a custom pipe with command
    //2. Apply custom pipe
    //3. Update custom pipe file
    //4. Apply params in custom pipes

    //39. Template driven form validation
    //#write code yourself

    //40. Reactive form in Angular
    //1. Make a simple form
    //2. Import module and form control
    //3. Connect form controls with form
    //4. Get values from form
    //5. Default value in form
    getUser(){
      return this.loginForm.get('user')
    }
    getPassword(){
      return this.loginForm.get('password')
    }

    // Basic Routing
    // Start with routing
    // .Make new app ==> Routing-Blog
    // .Make component ==> home, about, user
    // .Apply routing
// 57. Automation testing | unit testing
// Types of automation testing 
// Important points of automation testing
// Automation testing angular
// check config files and structures in angular
// Types of automation testing=>
// Unit test case
// Integration
// End-to-end
}
