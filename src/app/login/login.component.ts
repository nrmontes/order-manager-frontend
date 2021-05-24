import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  clickLogin(){
      alert('Login complete!');
  }

  clickRegister(){
    alert('Going to Sign Up page!');
}

  constructor() { }

  ngOnInit(): void {
  }

}
