import { Component, ViewChild ,AfterViewInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavBarComponent } from './navbar/navbar.component';
import{HeaderComponent} from './header/header.component'
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppNavBarComponent,HeaderComponent, FormsModule,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title : string  = 'This loaded dynamically';
  imgUrl : string = 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg';
  isDisabled : boolean = true;
  isActive : boolean = false;
  fruitName : string = "Apple";
  userName : string = "John Doe";

  buttonClick (){
    console.log('Button click');
  }

  keyEnter (){
    console.log('Key Pressed');
  }

  enterKey (event:any){
    console.log(event.keyCode);
    if(event.keyCode==13){
      console.log('Enter key pressed'); 
    }
  }

  keyupFiltering(){
    console.log('key filtering');
  }

  keyupFiltering1(user : HTMLInputElement){
    console.log(user.value);
    console.log(user.id);
  }

  updateUserName(username : HTMLInputElement){
    this.userName = username.value;
    console.log(this.userName);
  }

  isLoggedIn : boolean = false;
  userNamme : string = "Nilakshi";

  isAdmin : boolean = false;
  isMember : boolean = true;
  isGuest : boolean = true;

  parentMSG : string = "Message coming from the parent conponent";

  logInCount : number = 0;

  countLogin(){
    this.logInCount ++;
    console.log(this.logInCount);

  }

  countLoginAttampt(){
    this.logInCount ++;
    console.log(this.logInCount);
  }

  userRole : string = "Admin";
}

