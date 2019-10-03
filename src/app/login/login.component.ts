import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

interface Alumno {
  matricula: string,
  password: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  alumnoPrueba: Alumno = {matricula: "201739995", password: "football26398"};
  accesoPermitido = 0;
  loginForm = new FormGroup({
    user: new FormControl(''),
    password: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }

  login() {
    if(this.alumnoPrueba.matricula == this.loginForm.value.user && this.alumnoPrueba.password == this.loginForm.value.password)
    {
      console.log("Acceso Permitido");
    }
    else
    {
      console.log("Acceso Denegado");
    }
  }
}
