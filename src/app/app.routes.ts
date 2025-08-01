import { FormularioVistaGeneral } from './componentes/formularios/Nuevo/formulario-vista-general/formulario-vista-general';
import { Routes } from '@angular/router';
import { GestionPreguntasComponent } from './componentes/creador-preguntas/gestion-preguntas/gestion-preguntas.component';
import { FacultadRegistroComponent } from './componentes/facultad/facultad-registro/facultad-registro.component';
import { FacultadRegistroDepartamentosComponent } from './componentes/facultad/facultad-registro-departamentos/facultad-registro-departamentos.component';
import { RiesgoGeneral } from './componentes/riesgo-graficas/riesgo-general/riesgo-general';
import { FormularioPreguntasV2 } from './componentes/formulario-preguntas-v2/formulario-preguntas-v2';

export const routes: Routes = [
  { path: 'formulario', component: FormularioVistaGeneral },
  { path: 'preguntas-v2', component: FormularioPreguntasV2 },
  //Facultad
  { path: 'areas', component: FacultadRegistroComponent },
  {
    path: 'facultad-registro-departamento',
    component: FacultadRegistroDepartamentosComponent,
  },
  { path: 'creador-preguntas', component: GestionPreguntasComponent },
  { path: 'riesgos', component: RiesgoGeneral },
  { path: '', redirectTo: '/formulario', pathMatch: 'full' },
];
