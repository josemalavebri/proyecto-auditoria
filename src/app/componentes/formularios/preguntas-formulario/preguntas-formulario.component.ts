import { Component } from '@angular/core';
import {
  Form,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preguntas-formulario',
  imports: [ReactiveFormsModule],
  templateUrl: './preguntas-formulario.component.html',
  styleUrl: './preguntas-formulario.component.css',
})
export class PreguntasFormularioComponent {
  formulario: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.formulario = this.fb.group({
      resp_1: ['no'],
      resp_2: [''],
    });
  }

  continuarCatalogo() {
    this.router.navigate(['/preguntas-v2']);
  }
}
