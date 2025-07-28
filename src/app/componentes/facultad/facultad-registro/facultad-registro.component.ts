import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-facultad-registro',
  imports: [],
  templateUrl: './facultad-registro.component.html',
  styleUrl: './facultad-registro.component.css'
})
export class FacultadRegistroComponent {

  constructor(private router: Router) {

  }
  registroFacultad() {
    this.router.navigate(['/facultad-registro-departamento']);
  }

}
