import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeaderComponent } from "../layout/header/header.component";

@Component({
    selector: 'app-grupos',
    standalone: true,
    templateUrl: './grupos.component.html',
    styleUrl: './grupos.component.css',
    imports: [CommonModule, ReactiveFormsModule, HeaderComponent]
})
export class GruposComponent {

  searchForm!: FormGroup;
  private readonly _fb = inject(FormBuilder);
ngOnInit(): void {
    this.initPersonaHumanaForm();
  }
  private initPersonaHumanaForm(): void {
    this.searchForm = this._fb.group({
      nroDocumento: new FormControl('', []),
      buscar: new FormControl('', [Validators.required]),


    });
  
  } 
}