import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resumen-riesgos',
  imports: [],
  templateUrl: './resumen-riesgos.component.html',
  styleUrl: './resumen-riesgos.component.css',
})
export class ResumenRiesgosComponent {
  constructor(private router: Router) {}
  siguienteFace() {
    this.router.navigate(['formulario-siguiente-encuesta']);
  }
}
