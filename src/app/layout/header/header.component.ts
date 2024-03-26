import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule,
    ReactiveFormsModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  searchForm!: FormGroup;
  private readonly _fb = inject(FormBuilder);

  ngOnInit(): void {
    this.initPersonaHumanaForm();
  }

  private initPersonaHumanaForm(): void {
    this.searchForm = this._fb.group({
      nroDocumento: new FormControl('', []),
      buscador: new FormControl('', [Validators.required]),

    });

  }

  handleClickGrupos() {
    // Agrega aquí la lógica que deseas ejecutar cuando se hace clic en "grupos"
    console.log('Haz hecho clic en el elemento "grupos".');
  }
  
  handleClickHome() {
    // Agrega aquí la lógica que deseas ejecutar cuando se hace clic en "grupos"
    console.log('Haz hecho clic en el elemento "home".');
  }

  handleClickCalendario() {
    // Agrega aquí la lógica que deseas ejecutar cuando se hace clic en "grupos"
    console.log('Haz hecho clic en el elemento "calendario".');
  }

  handleClickGruposRepro() {
    // Agrega aquí la lógica que deseas ejecutar cuando se hace clic en "grupos"
    console.log('Haz hecho clic en el elemento "repro".');
  }

}
