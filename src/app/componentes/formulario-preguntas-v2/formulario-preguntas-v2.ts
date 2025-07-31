import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-preguntas-v2',
  imports: [],
  templateUrl: './formulario-preguntas-v2.html',
  styleUrl: './formulario-preguntas-v2.css',
})
export class FormularioPreguntasV2 {
  card1Inactiva = false;
  card2Inactiva = false;
  card3Inactiva = false;

  constructor(private router: Router) {}
  cambiarPestana() {
    this.router.navigate(['/preguntas']);
  }
  finalizarFormulario() {
    this.router.navigate(['/resumen']);
  }
}
