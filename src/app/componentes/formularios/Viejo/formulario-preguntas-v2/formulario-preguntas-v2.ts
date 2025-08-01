import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-preguntas-v2',
  templateUrl: './formulario-preguntas-v2.html',
  styleUrls: ['./formulario-preguntas-v2.css'],
  imports: [DatePipe, FormsModule, CommonModule],
})
export class FormularioPreguntasV2 {
  hoy: Date = new Date();

  // Simulación de datos de progreso de la encuesta
  seccionActual: number = 4;
  totalSecciones: number = 8;

  preguntaActual: number = 1;
  totalPreguntas: number = 5;
  deshabilitado: boolean = false;
  deshabilitado2: boolean = false;
  deshabilitarCard() {
    this.deshabilitado = true;
  }

  deshabilitarCard2() {
    this.deshabilitado2 = true;
  }
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
  abrirItems() {
    this.router.navigate(['preguntas']);
  }

  // Suponiendo que tienes 10 preguntas (índices 0 a 9)
  botonesSiPresionados: boolean[] = Array(10).fill(false);
  botonesNoPresionados: boolean[] = Array(10).fill(false);

  toggleBotonSi(index: number) {
    this.botonesSiPresionados[index] = true;
    this.botonesNoPresionados[index] = false;
  }

  toggleBotonNo(index: number) {
    this.botonesNoPresionados[index] = true;
    this.botonesSiPresionados[index] = false;
  }
}
