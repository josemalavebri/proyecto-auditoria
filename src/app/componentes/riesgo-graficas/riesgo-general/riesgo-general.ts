import { Component, ElementRef, ViewChild } from '@angular/core';
import Chart, { ChartConfiguration, ChartOptions } from 'chart.js/auto';

@Component({
  selector: 'app-riesgo-general',
  templateUrl: './riesgo-general.html',
  styleUrl: './riesgo-general.css',
})
export class RiesgoGeneral {
  @ViewChild('barCanvas') barCanvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('pieCanvas') pieCanvas!: ElementRef<HTMLCanvasElement>;

  respuestasSi = 7;
  respuestasNo = 3;

  ngAfterViewInit(): void {
    this.renderBarChart();
    this.renderPieChart();
  }

  renderBarChart() {
    new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Sí', 'No'],
        datasets: [
          {
            label: 'Respuestas',
            data: [this.respuestasSi, this.respuestasNo],
            backgroundColor: ['#36A2EB', '#FF6384'],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Evaluación de Riesgos',
          },
        },
      },
    });
  }

  renderPieChart() {
    const porcentajeRiesgo =
      (this.respuestasNo / (this.respuestasSi + this.respuestasNo)) * 100;

    new Chart(this.pieCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Riesgo', 'Seguro'],
        datasets: [
          {
            data: [porcentajeRiesgo, 100 - porcentajeRiesgo],
            backgroundColor: ['#FFCE56', '#4BC0C0'],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Porcentaje de Riesgo',
          },
        },
      },
    });
  }
}
