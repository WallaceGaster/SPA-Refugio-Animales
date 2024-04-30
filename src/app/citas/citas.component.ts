import { Component, ElementRef, Inject, Input, OnDestroy, Optional, Self, ViewChild, forwardRef } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MascotaService } from '../shared/mascota.service';
import { Mascota } from '../mascota';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MAT_FORM_FIELD, MatFormField, MatFormFieldControl, MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
import { FormsModule, ReactiveFormsModule, FormControl, Validators, FormBuilder, FormGroup, ControlValueAccessor, NgControl, AbstractControl } from '@angular/forms';
import { Subject, merge } from 'rxjs';
import {MatStepperModule} from '@angular/material/stepper';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { FocusMonitor } from '@angular/cdk/a11y';

@Component({
  selector: 'app-citas',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [RouterModule, MatButtonModule, 
    MatFormFieldModule,
    MatIconModule,
    MatStepperModule,
    MatInputModule, 
    MatDatepickerModule, 
    FormsModule, 
    ReactiveFormsModule],
  templateUrl: './citas.component.html',
  styleUrl: './citas.component.css'
})
export class CitasComponent {

  mascota!:Mascota;
  name:string="";
  email = new FormControl('', [Validators.required, Validators.email]);
  errorMessage = '';
  Fecha = new Date();
  FechaActual:string="";
  Hora:string="";

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
    secondCtrl: ['', [Validators.required, Validators.email]],
  });
  secondFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  isLinear = true;

  constructor(public mascotaService:MascotaService, public activatedRoute: ActivatedRoute, private _formBuilder: FormBuilder){
    this.activatedRoute.params.subscribe(params => {
    /*this.mascota=mascotaService.getUnaMascota(params['id']);*/
    })
    this.FechaActual = this.Fecha.getDate() + " / " + (this.Fecha.getMonth()+1) + " / " + this.Fecha.getFullYear();
    let hour = this.Fecha.getHours();
    let minutes = this.Fecha.getMinutes();
    this.Hora = hour + ":" + minutes;

    merge(this.email.statusChanges, this.email.valueChanges)
    .pipe(takeUntilDestroyed())
    .subscribe(() => this.updateErrorMessage());
  }
  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage = 'Debes ingresar un valor';
    } else if (this.email.hasError('email')) {
      this.errorMessage = 'No es un correo válido';
    } else {
      this.errorMessage = '';
    }
  }
  myFilter = (d: Date | null): boolean => {
    const fecha = new Date;
    const day = (d || new Date()).getDate();
    const month = (d || new Date()).getMonth();
    const year = (d || new Date()).getFullYear();
    let ayer = fecha.getDate()-1;
    let mes = fecha.getMonth();
    let anio = fecha.getFullYear();
    // Prevent Saturday and Sunday from being selected.
    return (day > ayer && month === mes && year === anio) || (month > mes && year === anio) || (year > anio);
  };
}