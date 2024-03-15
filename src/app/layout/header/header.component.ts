import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
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
}
