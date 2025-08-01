import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-evaluacion-opcion',
  imports: [],
  templateUrl: './evaluacion-opcion.html',
  styleUrl: './evaluacion-opcion.css',
})
export class EvaluacionOpcion {
  constructor(private router: Router) {}
  volverPreguntas() {
    this.router.navigate(['/preguntas-v3']);
  }
}
