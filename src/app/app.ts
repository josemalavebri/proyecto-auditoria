import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormularioVistaComponent } from './componentes/formularios/formulario-vista/formulario-vista.component';
import { PreguntasFormularioComponent } from './componentes/formularios/preguntas-formulario/preguntas-formulario.component';
import { FormularioResumenComponent } from './componentes/formularios/formulario-resumen/formulario-resumen.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterModule,
    RouterOutlet,
    FormularioVistaComponent,
    PreguntasFormularioComponent,
    FormularioResumenComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('front-auditoria-seguridad');
}
