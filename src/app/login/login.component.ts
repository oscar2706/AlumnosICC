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
export class LoginModalComponent implements OnInit{
  private _success = new Subject<string>();
  successMessage: string;
  numeroIdentificacion: string;
  passwordModified = 0;

  passwordForm = new FormGroup({
    password: new FormControl(''),
    confirmation: new FormControl('')
  });

  constructor(private router: Router, public activeModal: NgbActiveModal) {}

  ngOnInit() {
    this._success.subscribe((message) => this.successMessage = message);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successMessage = null);
  }

  changePassword() {
    if(this.passwordForm.value.password == this.numeroIdentificacion) {
      this.passwordModified = 0;
      this._success.next("La nueva contraseña no puede ser igual a la contraseña por defecto");
    }
    else if(this.passwordForm.value.password == "" || this.passwordForm.value.confirmation == "") {
      this.passwordModified = 0;
      this._success.next("Campos vacios");
    }
    else if(this.passwordForm.value.password == this.passwordForm.value.confirmation) {
      this.passwordModified = 1;
      this._success.next("Contraseña actualizada");
      setTimeout(() => {
        this.activeModal.close();
        this.router.navigate(['alumno/materias']);
      }, 1500);
    }
    else {
      this.passwordModified = 0;
      this._success.next("Datos ingresados no coinciden");
    }
  }
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

  alumnoPrueba: Alumno = { matricula: "201739995", password: "123456" };
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
    const modal = this.modalService.open(LoginModalComponent);
    modal.componentInstance.numeroIdentificacion = this.loginForm.value.user;
  }  

  limpiarCampos() {
    this.loginForm.controls['user'].setValue('');
    this.loginForm.controls['password'].setValue('');
  }
}
