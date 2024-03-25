import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-barra-lateral-derecha',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './barra-lateral-derecha.component.html',
  styleUrl: './barra-lateral-derecha.component.css'
})
export class BarraLateralDerechaComponent {
  novedades: Array<string> = [
    'Descripcion',
    'Descripcion',
    'Descripcion'
  ]

  proximosEventos: Array<string> = [
    'After SMS',
    'Jornada xxx',
    'Semana de auditorías',
    'Festejo de cumpleaños'
  ]

  cumpleaniero = [
    {
      nombre: 'Juan',
      apellido: 'Pérez',
      fechaNacimiento: '05-15',
      foto: '../assets/img/persona1.jpg'
    },
    {
      nombre: 'María',
      apellido: 'García',
      fechaNacimiento: '10-20',
      foto: '../assets/img/persona2.jpg'
    },

    {
      nombre: 'Juan',
      apellido: 'Pérez',
      fechaNacimiento: '05-15',
      foto: '../assets/img/persona3.jpg'
    },
    {
      nombre: 'María',
      apellido: 'García',
      fechaNacimiento: '10-20',
      foto: '../assets/img/persona4.jpg'
    }
  ];
}
