import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { debounceTime, subscribeOn } from "rxjs/operators";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AlumnoService } from "../services/alumno.service";
import { TutorService } from "../services/tutor.service";
import { Alumno } from "../models/alumno";
import { Trabajador } from "../models/trabajador";

@Component({
  selector: "app-modal-login",
  templateUrl: "./modal-login.component.html"
})
export class LoginModalComponent implements OnInit {
  private _success = new Subject<string>();
  successMessage: string;
  numeroIdentificacion: string;
  passwordModified = 0;
  usuarioSeleccionado: number;

  passwordForm = new FormGroup({
    password: new FormControl(""),
    confirmation: new FormControl("")
  });

  constructor(
    private router: Router,
    public activeModal: NgbActiveModal,
    private alumnoService: AlumnoService,
    private tutorService: TutorService
  ) {}

  ngOnInit() {
    this._success.subscribe(message => (this.successMessage = message));
    this._success
      .pipe(debounceTime(5000))
      .subscribe(() => (this.successMessage = null));
  }

  changePassword() {
    if (this.passwordForm.value.password == this.numeroIdentificacion) {
      this.passwordModified = 0;
      this._success.next(
        "La nueva contraseña no puede ser igual a la contraseña por defecto"
      );
    } else if (
      this.passwordForm.value.password == "" ||
      this.passwordForm.value.confirmation == ""
    ) {
      this.passwordModified = 0;
      this._success.next("Campos vacios");
    } else if (
      this.passwordForm.value.password == this.passwordForm.value.confirmation
    ) {
      this.passwordModified = 1;
      this._success.next("Contraseña actualizada");
      if(this.usuarioSeleccionado == 1) {
        this.alumnoService.updateAlumnoPassword(this.numeroIdentificacion, this.passwordForm.value.password).subscribe();
      } 
      else {
        
      }
      setTimeout(() => {
        this.activeModal.close();
        this.router.navigate(["alumno/materias"]);
      }, 1500);
    } else {
      this.passwordModified = 0;
      this._success.next("Datos ingresados no coinciden");
    }
  }
}

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  private _success = new Subject<string>();
  successMessage: string;
  alumnoLogin: Alumno;
  tutorLogin: Trabajador;

  usuarios = [
    { usuario: "Alumno", value: 1 },
    { usuario: "Tutor", value: 2 },
    { usuario: "Coordinador", value: 3 },
    { usuario: "Administrador", value: 4 }
  ];
  loginForm = new FormGroup({
    usuarioSeleccionado: new FormControl(this.usuarios),
    user: new FormControl(""),
    password: new FormControl("")
  });

  constructor(
    private router: Router,
    private modalService: NgbModal,
    private alumnoService: AlumnoService,
    private tutorService: TutorService
  ) {}

  ngOnInit() {
    this._success.subscribe(message => (this.successMessage = message));
    this._success
      .pipe(debounceTime(5000))
      .subscribe(() => (this.successMessage = null));
    this.loginForm.controls.usuarioSeleccionado.setValue(1);
  }

  login() {
    switch (this.loginForm.value.usuarioSeleccionado) {
      case 1:
        this.alumnoService
          .getAlumno(this.loginForm.value.user)
          .subscribe(data => {
            this.alumnoLogin = data;
            this.verificacionLoginAlumno();
          });
        break;
      case 2:
        this.tutorService
          .getTrabajador(this.loginForm.value.user)
          .subscribe(data => {
            this.tutorLogin = data;
            this.verificacionLoginTutor();
          });
        break;
      case 3:
        if (this.loginForm.value.password == "123") {
          this.router.navigate(["/coordinador"]);
        } else {
          this._success.next("Contraseña Incorrecta");
        }
        break;
      case 4:
        if (this.loginForm.value.password == "admin") {
          this.router.navigate(["/administrador/proyeccion"]);
        } else {
          this._success.next("Contraseña Incorrecta");
        }
        break;
    }
  }

  open(usuarioSeleccionado) {
    const modal = this.modalService.open(LoginModalComponent);
    modal.componentInstance.numeroIdentificacion = this.loginForm.value.user;
    modal.componentInstance.usuarioSeleccionado = usuarioSeleccionado;
  }

  limpiarCampos() {
    this.loginForm.controls["user"].setValue("");
    this.loginForm.controls["password"].setValue("");
  }

  verificacionLoginAlumno() {
    if (
      this.loginForm.value.user == this.alumnoLogin.matricula &&
      this.loginForm.value.password == this.alumnoLogin.password
    ) {
      if (this.loginForm.value.user == this.loginForm.value.password) {
        this.open(1);
      } else {
        this.router.navigate(["/alumno/materias"]);
      }
    } else {
      this._success.next("Usuario o Contraseña Incorrecta");
    }
  }

  verificacionLoginTutor() {
    if (
      this.loginForm.value.user == this.tutorLogin.id &&
      this.loginForm.value.password == this.tutorLogin.password
    ) {
      if (this.loginForm.value.user == this.loginForm.value.password) {
        this.open(2);
      } else {
        this.router.navigate(["/tutor"]);
      }
    } else {
      this._success.next("Usuario o Contraseña Incorrecta");
    }
  }
}
