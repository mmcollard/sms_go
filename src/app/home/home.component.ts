import { Component } from '@angular/core';
import { BarraLateralComponent } from "../layout/barra-lateral/barra-lateral.component";
import { BotonesComponent } from "../layout/botones/botones.component";
import { CardPublicacionComponent } from "../layout/card-publicacion/card-publicacion.component";
import { BarraLateralDerechaComponent } from "../layout/barra-lateral-derecha/barra-lateral-derecha.component";
import { HeaderComponent } from "../layout/header/header.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [
        CommonModule, RouterModule,
        BarraLateralComponent, BotonesComponent, CardPublicacionComponent, BarraLateralDerechaComponent, HeaderComponent]
})
export class HomeComponent {

}
