import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-grupos',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './grupos.component.html',
  styleUrl: './grupos.component.css'
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