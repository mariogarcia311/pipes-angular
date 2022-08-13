import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent implements OnInit {
  nombreLower: string = 'MaRiO';
  nombreCompleto: string = 'Mario GarCia';
  fecha: Date = new Date();
  constructor() {}

  ngOnInit(): void {}
}
