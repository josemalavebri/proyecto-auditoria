import { Routes } from '@angular/router';
import { GestionPreguntasComponent } from './componentes/creador-preguntas/gestion-preguntas/gestion-preguntas.component';
import { FormularioResumenComponent } from './componentes/formularios/formulario-resumen/formulario-resumen.component';
import { FormularioVistaComponent } from './componentes/formularios/formulario-vista/formulario-vista.component';
import { ResumenRiesgosComponent } from './componentes/formularios/resumen-riesgos/resumen-riesgos.component';
import { FacultadRegistroComponent } from './componentes/facultad/facultad-registro/facultad-registro.component';
import { FacultadRegistroDepartamentosComponent } from './componentes/facultad/facultad-registro-departamentos/facultad-registro-departamentos.component';
import { PreguntasFormularioComponent } from './componentes/formularios/preguntas-formulario/preguntas-formulario.component';
import { RiesgoGeneral } from './componentes/riesgo-graficas/riesgo-general/riesgo-general';
import { FomularioSiguienteEncuesta } from './componentes/formularios/fomulario-siguiente-encuesta/fomulario-siguiente-encuesta';
import { FormularioPreguntasV3 } from './componentes/formulario-preguntas-v3/formulario-preguntas-v3';
import { EvaluacionOpcion } from './componentes/evaluacion-opcion/evaluacion-opcion';

export const routes: Routes = [
  { path: 'preguntas', component: PreguntasFormularioComponent },
  { path: 'evaluacion-opcion', component: EvaluacionOpcion },
  { path: 'preguntas-v3', component: FormularioPreguntasV3 },
  { path: 'resumen', component: FormularioResumenComponent },
  { path: 'formulario', component: FormularioVistaComponent },
  { path: 'reportes', component: FormularioResumenComponent },
  {
    path: 'formulario-siguiente-encuesta',
    component: FomularioSiguienteEncuesta,
  },
  { path: 'resumen-riesgos', component: ResumenRiesgosComponent },
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
