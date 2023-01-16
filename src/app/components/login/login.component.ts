import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  users!: User[];
  validMessage = '';


  constructor(private userService : UsersService ,private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required])
    })
   }

  ngOnInit(): void {
    console.log(this.obtenerUsuarios());
    this.obtenerUsuarios();
  }

  obtenerUsuarios(){
    this.userService.getUsers().subscribe(
      data=> this.users = data,
      error => console.log("Fallo el reques de get users")
    )
  }

  get controles(){
    return this.loginForm.controls;
  }

  submitLogin(){
    if(this.loginForm.valid){

      for(let i = 0 ; i< this.users.length ; i++){
        if(this.users[i].email = this.loginForm.value.email && this.users[i].address.zipcode == this.loginForm.value.password){
          localStorage.setItem("Usuario", this.loginForm.value.email);
          localStorage.setItem("Id",this.users[i].id.toString());
          this.router.navigate(['posts-user'])
        }
      }

      this.validMessage = "Credenciales invalidas."
      this.loginForm.reset();
    }
    
  }

}
