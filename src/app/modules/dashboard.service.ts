import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  bigChart() {
    return [{
      name: 'SALUDABLE',
      data: [502, 635, 809, 947, 1402, 3634, 5268]
    }, {
      name: 'EN RIESGO ',
      data: [106, 107, 111, 133, 221, 767, 1766]
    }, {
      name: 'CONTAGIADO',
      data: [163, 203, 276, 408, 547, 729, 628]
    }];
  }

  cards() {
    return [71, 78, 39, 66];
  }

  pieChart() {
    return [{
      name: 'Transporte publico ',
      y: 61.41,
      sliced: true,
      selected: true
    }, {
      name: 'Antros',
      y: 11.84
    }, {
      name: 'Centros de Diversiones',
      y: 10.85
    }, {
      name: 'Hospitales',
      y: 4.67
    }, {
      name: 'Restaurantes',
      y: 4.18
    }, {
      name: 'Salidas al supermercado',
      y: 1.64
    }, {
      name: 'Parkes',
      y: 1.6
    }, {
      name: 'Transporte Privado',
      y: 1.2
    }, {
      name: 'Caminatas al aire libre',
      y: 2.61
    }];
  }
}
