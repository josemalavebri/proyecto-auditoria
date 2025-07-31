import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preguntas-formulario',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './preguntas-formulario.component.html',
  styleUrl: './preguntas-formulario.component.css',
})
export class PreguntasFormularioComponent {
  formulario: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.formulario = this.fb.group({
      resp_1: ['no'],
      resp_2: ['no'],
      resp_3: ['no'],
      resp_4: ['no'],
      resp_5: ['no'],
      resp_6: ['no'],
      resp_7: ['no'],
      resp_8: ['no'],
      resp_9: ['no'],
      resp_10: ['no'],
      resp_11: ['no'],
    });
  }

  continuarCatalogo() {
    this.router.navigate(['/preguntas-v2']);
  }
  modalVisible = false;

  porcentajeCumplimiento: number | null = null;

  abrirModal() {
    this.modalVisible = true;
  }

  cerrarModal() {
    this.modalVisible = false;
  }

  aceptar() {
    // lógica para guardar porcentaje
    this.cerrarModal();
  }
}
