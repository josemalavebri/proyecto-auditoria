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
      id: 1,
      fecha: '2025-07-15 10:00',
      numero: 'ENC-001',
      estado: 'Completada',
      preguntas: [],
      detalles: [
        { fecha: '2025-07-01', cantidad: 10, precio: 100 },
        { fecha: '2025-07-05', cantidad: 5, precio: 50 },
      ],
      expandido: false,
    },
    {
      id: 2,
      fecha: '2025-07-28 14:45',
      numero: 'ENC-002',
      estado: 'Pendiente',
      preguntas: [],
      detalles: [
        { fecha: '2025-06-20', cantidad: 7, precio: 70 },
        { fecha: '2025-06-25', cantidad: 3, precio: 30 },
      ],
      expandido: false,
    },
  ];

  toggleDetalle(encuesta: any) {
    encuesta.expandido = !encuesta.expandido;
  }
}
