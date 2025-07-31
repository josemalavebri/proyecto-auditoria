import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-preguntas-v2',
  templateUrl: './formulario-preguntas-v2.html',
  styleUrls: ['./formulario-preguntas-v2.css'],
  imports: [DatePipe, FormsModule],
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

  modalVisible = false;
  porcentajeCumplimiento: number | null = null;

  abrirModal() {
    this.modalVisible = true;
    document.body.style.overflow = 'hidden';
  }

  cerrarModal() {
    this.modalVisible = false;
    document.body.style.overflow = '';
  }

  aceptar() {
    if (
      this.porcentajeCumplimiento === null ||
      this.porcentajeCumplimiento < 0 ||
      this.porcentajeCumplimiento > 100
    ) {
      alert('Ingrese un porcentaje válido entre 0 y 100');
      return;
    }
    console.log('Porcentaje ingresado:', this.porcentajeCumplimiento);
    // Aquí manejas el valor (guardar, enviar, etc)
    this.cerrarModal();
  }
  abrirItem() {
    this.router.navigate(['preguntas']);
  }
}
