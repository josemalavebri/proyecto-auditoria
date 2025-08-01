import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-preguntas-v3',
  templateUrl: './formulario-preguntas-v3.html',
  styleUrls: ['./formulario-preguntas-v3.css'],
  imports: [CommonModule, FormsModule],
})
export class FormularioPreguntasV3 {
  constructor(private router: Router) {}
  fechaHoy: string = new Date().toLocaleDateString('es-EC');

  aplicaTodo: boolean = false;
  aceptarTodo: boolean = false;
  noAplicaTodo: boolean = false;

  aplica1: boolean = false;
  aplica2: boolean = false;
  aplica3: boolean = false;
  aplica4: boolean = false;

  opcionSeleccionada1: number = 0;
  opcionSeleccionada2: number = 0;
  opcionSeleccionada3: number = 0;
  opcionSeleccionada4: number = 0;

  onToggleAplicaTodo() {
    this.aplica1 = this.aplicaTodo;
    this.aplica2 = this.aplicaTodo;
    this.aplica3 = this.aplicaTodo;
    this.aplica4 = this.aplicaTodo;

    if (!this.aplicaTodo) {
      // Si desactivas aplicaTodo, también apaga los otros switches para no confundir
      this.aceptarTodo = false;
      this.noAplicaTodo = false;
    }
  }

  onCambiarAceptarTodo() {
    if (this.aceptarTodo) {
      this.noAplicaTodo = false;
      this.aplica1 = true;
      this.aplica2 = true;
      this.aplica3 = true;
      this.aplica4 = true;

      this.opcionSeleccionada1 = 2;
      this.opcionSeleccionada2 = 2;
      this.opcionSeleccionada3 = 2;
      this.opcionSeleccionada4 = 2;
    } else {
      // Si desactivas el switch aceptarTodo, no cambiar nada aquí
    }
  }

  onCambiarNoAplicaTodo() {
    if (this.noAplicaTodo) {
      this.aceptarTodo = false;
      this.aplica1 = true;
      this.aplica2 = true;
      this.aplica3 = true;
      this.aplica4 = true;

      this.opcionSeleccionada1 = 0;
      this.opcionSeleccionada2 = 0;
      this.opcionSeleccionada3 = 0;
      this.opcionSeleccionada4 = 0;
    } else {
      // Si desactivas noAplicaTodo, no cambies nada
    }
  }

  onCambioSliderIndividual() {
    // Desactiva switches globales si hay interacción individual
    this.aceptarTodo = false;
    this.noAplicaTodo = false;

    // Verifica si alguno está en "Mitigar"
    const sliders = [
      this.opcionSeleccionada1,
      this.opcionSeleccionada2,
      this.opcionSeleccionada3,
      this.opcionSeleccionada4,
    ];

    if (sliders.includes(1)) {
      this.irAMitigacion(); // redirige al componente con el formulario
    }
  }

  irAMitigacion() {
    this.router.navigate(['/evaluacion-opcion']);
  }
}
