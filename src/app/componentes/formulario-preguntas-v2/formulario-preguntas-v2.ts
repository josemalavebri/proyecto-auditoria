import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-formulario-preguntas-v2',
  templateUrl: './formulario-preguntas-v2.html',
  styleUrls: ['./formulario-preguntas-v2.css'],
  imports: [DatePipe],
})
export class FormularioPreguntasV2 {
  hoy: Date = new Date();

  // Simulación de datos de progreso de la encuesta
  seccionActual: number = 4;
  totalSecciones: number = 8;

  preguntaActual: number = 1;
  totalPreguntas: number = 5;

  constructor(private router: Router) {}

  cambiarPestana() {
    this.router.navigate(['/preguntas']);
  }

  finalizarFormulario() {
    this.router.navigate(['/resumen']);
  }
}
