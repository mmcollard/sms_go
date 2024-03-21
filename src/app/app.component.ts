import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from "./home/home.component";
import { CardPublicacionComponent } from "./layout/card-publicacion/card-publicacion.component";
import { BotonesComponent } from "./layout/botones/botones.component";
import { BarraLateralComponent } from "./layout/barra-lateral/barra-lateral.component";
import { BarraLateralDerechaComponent } from "./layout/barra-lateral-derecha/barra-lateral-derecha.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, CardPublicacionComponent, BotonesComponent, BarraLateralComponent, BarraLateralDerechaComponent]
})
export class AppComponent {
  title = 'proyectoangular';
}
