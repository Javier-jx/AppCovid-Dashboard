import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';

export interface PeriodicElement {
  carrera: string;
  position: number;
  student: number;
  edifice: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, carrera: 'Informatica', student: 1.0079, edifice: 'S' },
  { position: 2, carrera: 'Gobierno', student: 4.0026, edifice: 'A' },
  { position: 3, carrera: 'Ing.Electrónica e Ing.Aeronáutica', student: 40.078, edifice: 'B' },
  { position: 4, carrera: 'Ing.Química y Bioquímica', student: 6.941, edifice: 'C' },
  { position: 5, carrera: 'Dirección de Apoyo', student: 9.0122, edifice: 'D' },
  { position: 6, carrera: 'Laboratorios ligeros. Química, Bioquímica, Aeronáutica y Física', student: 10.811, edifice: 'E' },
  { position: 7, carrera: 'Centro de Información', student: 12.0107, edifice: 'G' },
  { position: 8, carrera: 'Contaduría Pública', student: 14.0067, edifice: 'H' },
  { position: 9, carrera: ' Vinculación y Extensión', student: 15.9994, edifice: 'I' },
  { position: 10, carrera: 'Posgrado e Investigación', student: 18.9984, edifice: 'J' },
  { position: 11, carrera: 'Ingeniería Mecánica, Mecatrónica e Industrial.', student: 20.1797, edifice: 'K' },
  { position: 12, carrera: 'Laboratorios Pesados de Ingeniería', student: 22.9897, edifice: 'L' },
  { position: 13, carrera: 'Cafetería', student: 24.305, edifice: 'M' },
  { position: 14, carrera: 'Centro de Cómputo y Telemática', student: 26.9815, edifice: 'N' },
  { position: 15, carrera: 'Auditorio de Usos Múltiples', student: 28.0855, edifice: 'O' },
  { position: 16, carrera: 'Centro de Idiomas', student: 30.9738, edifice: 'P' },
  { position: 17, carrera: 'Ingeniaría en Sistemas Computacionales', student: 32.065, edifice: 'Q' },
  { position: 18, carrera: 'Cancha de Fútbol Rápido', student: 35.453, edifice: 'R' },
  { position: 19, carrera: 'Laboratorios pesados', student: 39.948, edifice: 'T,U' },
  { position: 20, carrera: 'Biblioteca Virtual', student: 39.0983, edifice: 'V' },
  { position: 21, carrera: 'Ingeniería de Gestión Empresarial.', student: 39.0983, edifice: 'Z' },


];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bigChart = [];
  cards = [];
  pieChart = [];

  displayedColumns: string[] = ['position', 'carrera', 'student', 'edifice'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.bigChart = this.dashboardService.bigChart();
    this.cards = this.dashboardService.cards();
    this.pieChart = this.dashboardService.pieChart();

    this.dataSource.paginator = this.paginator;
  }

}
