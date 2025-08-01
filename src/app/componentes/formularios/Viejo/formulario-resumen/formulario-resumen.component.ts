import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-resumen',
  imports: [],
  templateUrl: './formulario-resumen.component.html',
  styleUrl: './formulario-resumen.component.css'
})
export class FormularioResumenComponent {
  constructor(private router: Router) {

  }
  regresar(): void {
    this.router.navigate(["/preguntas"]);
  }

  finalizarEncuesta() {
    this.router.navigate(["/resumen-riesgos"]);
  }
}
