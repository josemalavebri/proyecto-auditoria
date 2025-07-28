import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-vista',
  imports: [],
  templateUrl: './formulario-vista.component.html',
  styleUrl: './formulario-vista.component.css'
})
export class FormularioVistaComponent {

  constructor(private router: Router) {

  }
  continuarPreguntas() {
    this.router.navigate(['/preguntas'])
  }


}
