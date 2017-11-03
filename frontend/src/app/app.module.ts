import {HttpModule, Http} from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import {SocialService} from './services/socialservice.service';
const appRoutes: Routes =[
  {path:'', component: LoginComponent},
  
  {path:'profile', component: ProfileComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [SocialService],
  bootstrap: [AppComponent]
})
export class AppModule { }
