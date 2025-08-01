import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-vista-general',
  imports: [CommonModule],
  templateUrl: './formulario-vista-general.html',
  styleUrl: './formulario-vista-general.css',
})
export class FormularioVistaGeneral {
  encuestas = [
    {
      id: 'ENC-001',
      fecha: '2025-08-01',
      numero: 1,
      estado: 'Completada',
      detalles: [
        {
          proceso: 'Evaluación inicial',
          estado: 'Mitigar',
          descripcion:
            'Se identificó un riesgo bajo en el almacenamiento de datos.',
          supervisor: 'Ing. Laura Sánchez',
          responsableTratamiento: 'Lic. Pedro Mora',
          responsableImplementacion: 'Dr. Javier Ruiz',
          evidencia: 'Informe de revisión interna 2025',
          fechaInicio: '2025-06-01',
          fechaFin: '2025-06-05',
          observacionEstado:
            'Riesgo aceptado por baja probabilidad de impacto.',
        },
      ],
      fechaRegistro: '2025-08-02 ',
    },
    {
      id: 'ENC-002',
      fecha: '2025-08-02',
      numero: 2,
      estado: 'Pendiente',
      detalles: [
        {
          proceso: 'Análisis de vulnerabilidades',
          estado: 'Mitigar',
          descripcion:
            'Afectación a obligaciones. No haber tenido en cuenta la protección de datos al diseñar el tratamiento (parcial o total).',
          supervisor: 'Lic. Ana Pérez',
          responsableTratamiento: 'Ing. Carlos Gómez',
          responsableImplementacion: 'Lic. María López',
          evidencia: 'Reporte de seguridad',
          fechaInicio: '2025-07-10',
          fechaFin: '2025-07-20',
          observacionEstado: 'Pendiente implementación de controles.',
        },
        {
          proceso: 'Análisis de vulnerabilidades',
          estado: 'Mitigar',
          descripcion:
            'Afectación a obligaciones. No haber tenido en cuenta la protección de datos al diseñar el tratamiento (parcial o total).',
          supervisor: 'Lic. Ana Pérez',
          responsableTratamiento: 'Ing. Carlos Gómez',
          responsableImplementacion: 'Lic. María López',
          evidencia: 'Reporte de seguridad',
          fechaInicio: '2025-07-10',
          fechaFin: '2025-07-20',
          observacionEstado: 'Pendiente implementación de controles.',
        },
        {
          proceso: 'Análisis de vulnerabilidades',
          estado: 'Mitigar',
          descripcion:
            'Afectación a obligaciones. No haber tenido en cuenta la protección de datos al diseñar el tratamiento (parcial o total).',
          supervisor: 'Lic. Ana Pérez',
          responsableTratamiento: 'Ing. Carlos Gómez',
          responsableImplementacion: 'Lic. María López',
          evidencia: 'Reporte de seguridad',
          fechaInicio: '2025-07-10',
          fechaFin: '2025-07-20',
          observacionEstado: 'Pendiente implementación de controles.',
        },
      ],
      fechaRegistro: '2025-08-02 ',
    },

  ];

  modalVisible = false;
  encuestaSeleccionada: any = null;

  abrirModal(encuesta: any) {
    this.encuestaSeleccionada = encuesta;
    this.modalVisible = true;
    document.body.style.overflow = 'hidden';
  }

  cerrarModal() {
    this.modalVisible = false;
    this.encuestaSeleccionada = null;
    document.body.style.overflow = '';
  }
}
