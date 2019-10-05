import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html'
})
export class LoginModalComponent {
  constructor(public activeModal: NgbActiveModal) {}
}

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
  private _success = new Subject<string>();
  successMessage: string;

  alumnoPrueba: Alumno = { matricula: "201739995", password: "football26398" };
  usuarios = [
    { usuario: 'Alumno', value: 1 },
    { usuario: 'Tutor', value: 2 },
    { usuario: 'Coordinador', value: 3 },
    { usuario: 'Administrador', value: 4 }];
  loginForm = new FormGroup({
    usuarioSeleccionado: new FormControl(this.usuarios),
    user: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private router: Router, private modalService: NgbModal) { }

  ngOnInit() {
    this._success.subscribe((message) => this.successMessage = message);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successMessage = null);
    this.loginForm.controls.usuarioSeleccionado.setValue(1);
  }

  login() {
    switch (this.loginForm.value.usuarioSeleccionado) {
      case 1:
        if (this.alumnoPrueba.matricula == this.loginForm.value.user && this.alumnoPrueba.password == this.loginForm.value.password) {
          this.open();
          //this.router.navigate(['/alumno/materias']);
        }
        else {
          this._success.next("Usuario o Contraseña Incorrecta");
        }
        break;
      case 2:
        this._success.next("Usuario o Contraseña Incorrecta");
        break;
      case 3:
        if (this.loginForm.value.password == "123") {
          console.log("Acceso autorizado");
        }
        else {
          this._success.next("Contraseña Incorrecta");
        }
        break;
      case 4:
        if (this.loginForm.value.password == "admin") {
          console.log("Acceso autorizado");
        }
        else {
          this._success.next("Contraseña Incorrecta");
        }
        break;
    }
  }

  open() {
    this.modalService.open(LoginModalComponent);
  }  

  limpiarCampos() {
    this.loginForm.controls['user'].setValue('');
    this.loginForm.controls['password'].setValue('');
  }
}
