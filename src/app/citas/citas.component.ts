import {
  Component
} from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MascotaService } from '../shared/mascota.service';
import { Mascota } from '../mascota';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import {
  MatFormFieldModule
} from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { merge } from 'rxjs';
import { MatStepperModule } from '@angular/material/stepper';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { Cita } from '../shared/cita.model';
import { CitasService } from '../shared/citas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-citas',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    RouterModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatStepperModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
  ],
  templateUrl: './citas.component.html',
  styleUrl: './citas.component.css',
})
export class CitasComponent {
  mascota!: Mascota;
  cita!: Cita;
  obcita!: Cita[];

  name: string = '';
  telefono: number = 0;
  correo: string = '';
  HorasDisp: string[];
  HoraCita: string = '';
  valor:string = '';
  email = new FormControl('', [Validators.required, Validators.email]);
  errorMessage = '';
  Fecha = new Date();
  FechaActual: string = '';
  fechaCita = new Date();
  Hora: string = '';

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
    secondCtrl: ['', [Validators.required, Validators.email]],
    fourthCtrl: ['', [Validators.required, Validators.maxLength(10)]],
  });
  secondFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
    fifthCtrl: ['', Validators.required],
  });
  isLinear = true;

  constructor(
    public mascotaService: MascotaService,
    public activatedRoute: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private citasService: CitasService,
    private router: Router,
  ) {
    this.HorasDisp = ['10:00 AM', '12:00 PM', '2:00 PM', '4:00 PM', '6:00 PM'];
    this.activatedRoute.params.subscribe((params) => {
      this.mascota = mascotaService.getUnaMascota(params['id']);
    });
    this.FechaActual =
      this.Fecha.getDate() +
      ' / ' +
      (this.Fecha.getMonth() + 1) +
      ' / ' +
      this.Fecha.getFullYear();
    let hour = this.Fecha.getHours();
    let minutes = this.Fecha.getMinutes();
    this.Hora = (hour >= 10 ? hour:'0'+hour) + ':' + (minutes >= 10 ? minutes:'0'+minutes);

    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  ngOnInit() {
    this.cita = this.citasService.nuevaCita();
  }

  Validar(){
    const HorasSel = this.secondFormGroup.get("fifthCtrl")?.value;
    console.log(HorasSel);
    if(!HorasSel || HorasSel === "" && this.HorasDisp.length > 0){
      Swal.fire({
        title: 'ERROR',
        text: 'Por favor, elija una hora disponible para su cita.',
        icon: 'error',
        confirmButtonText: 'Ok',
      })
    }else if(!HorasSel || HorasSel === ""){
      Swal.fire({
        title: 'ERROR',
        text: 'No hay horas disponibles ese dia. Por favor, elija otro dia.',
        icon: 'error',
        confirmButtonText: 'Ok',
      })
    }
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
    const fecha = new Date();
    const day = (d || new Date()).getDate();
    const month = (d || new Date()).getMonth();
    const year = (d || new Date()).getFullYear();
    let ayer = fecha.getDate() - 1;
    let mes = fecha.getMonth();
    let anio = fecha.getFullYear();
    // Prevent Saturday and Sunday from being selected.
    return (
      (day > ayer && month === mes && year === anio) ||
      (month > mes && year === anio) ||
      year > anio
    );
  };

  SeleccionFecha() {
    this.HorasDisp = ['10:00 AM', '12:00 PM', '2:00 PM', '4:00 PM', '6:00 PM'];
    this.obcita = this.citasService.getCitas();
    let FechaQuerida = this.fechaCita;
    let NombreMas = this.mascota.nombre;
    let HorasDesc = this.HorasDisp;
    console.log('Llegue aca: ' + this.HorasDisp);
    console.log('FECHA QUERIDA: ' + this.fechaCita.toLocaleDateString("es-MX"));
    this.obcita.forEach(function (citas) {
      console.log(citas.FechaCita);
      if (
        NombreMas == citas.Mascota.nombre &&
        FechaQuerida.toLocaleDateString("es-MX") == citas.FechaCita
      ) {
        let indice = HorasDesc.indexOf(citas.HoraCita);
        HorasDesc.splice(indice, 1);
        console.log('Paso algo: ' + HorasDesc);
      }
    });
    this.HorasDisp = HorasDesc;
    console.log('Llegue aca: ' + this.HorasDisp);
  }

  onCambio(e: any){
    this.HoraCita = e.target.value;
  }

  GuardarLocalStorage() {
    this.cita.Nombre = this.name;
    this.cita.FechaActual = this.FechaActual;
    this.cita.Hora = this.Hora;
    this.cita.Correo = this.correo;
    this.cita.Mascota = this.mascota;
    this.cita.Telefono = this.telefono;
    this.cita.FechaCita = this.fechaCita.toLocaleDateString("es-MX");
    this.cita.HoraCita = this.HoraCita;
    this.citasService.agregarCita(this.cita);
    this.cita = this.citasService.nuevaCita();
    Swal.fire({
      title: 'Éxito!',
      text: 'Se ha registrado tu cita correctamente',
      icon: 'success',
      confirmButtonText: '¡Genial!',
    }).then(() => {
      this.router.navigate(['/home']);
    });
  }
}
