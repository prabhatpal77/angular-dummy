import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { UserAuthModule } from './user-auth/user-auth.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserList2Component } from './user-list2/user-list2.component';
import { StudentListComponent } from './student-list/student-list.component';
import { CountryListComponent } from './country-list/country-list.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChildComponent } from './child/child.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsdInrPipe } from './pipes/usd-inr.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { RedElDirective } from './red-el.directive';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { NoPageComponent } from './no-page/no-page.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
//import { FormsModule } from '@angular/forms';
import { UsersModule } from './users/users.module';
import { AdminModule } from './admin/admin.module';
import { UserlistComponent } from './userlist/userlist.component';
import { AdminlistComponent } from './adminlist/adminlist.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserListComponent,
    UserList2Component,
    StudentListComponent,
    CountryListComponent,
    HeaderComponent,
    ChildComponent,
    UserDetailsComponent,
    UsdInrPipe,
    RedElDirective,
    UserComponent,
    HomeComponent,
    NoPageComponent,
    FooterComponent,
    UserlistComponent,
    AdminlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAuthModule,
    FormsModule,
    NgbModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UsersModule,
    AdminModule,
    UserModuel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// 53 Routing Module
// Make module with routing file
// Define routing inside module
// make routing link
// test