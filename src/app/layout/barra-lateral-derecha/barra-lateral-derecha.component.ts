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

}
