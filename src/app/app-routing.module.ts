import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NoPageComponent } from './no-page/no-page.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path:'user',
    Component:userComponent
  },
  {
    path:'',
    component:HomeComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
const routes:Routes=[
  {
    component:AboutComponent,
    path:'about'
  },
  {
  component:UserComponent,
  path:'user/:id'
  },
  {
    component:HomeComponent,
    path:''
  },
  {
    component:NoPageComponent,
    path:'**' // ** routes the link to 404 page
  },
  {
    component:AboutComponent,
    path:'about',
    children:[
      {path:'company', component:AboutCompanyComponent},
      {path: 'me', component:AboutMeComponent}
    ]
  },
];    // wildcard
// 45. 404 page routing==>
// what is 404 page
// make component for 404 page 
// add routing for 404 page

//46. Child Routing==>
// 1. what are child routes?
// 2. Make some components. ==> about-component, about-me
// 3. Make child route
// 4. Make links for child routes.


