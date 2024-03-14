import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BotonesComponent } from './layout/botones/botones.component';
import { CardPublicacionComponent } from "./layout/card-publicacion/card-publicacion.component";
import { BarraLateralComponent } from "./layout/barra-lateral/barra-lateral.component";
import { BarraLateralDerechaComponent } from "./layout/barra-lateral-derecha/barra-lateral-derecha.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, BotonesComponent, BarraLateralComponent, CardPublicacionComponent, BarraLateralDerechaComponent]
})
export class AppComponent {
  title = 'proyectoangular';
}
