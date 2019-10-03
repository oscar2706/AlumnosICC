import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
    if(this.alumnoPrueba.matricula == this.loginForm.value.user && this.alumnoPrueba.password == this.loginForm.value.password)
    {
      console.log("Acceso Permitido");
      this.router.navigate(['/alumno/materias']);
    }
    else
    {
      console.log("Acceso Denegado");
    }
  }
}
