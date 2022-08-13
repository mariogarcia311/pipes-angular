import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [],
})
export class OrdenarComponent implements OnInit {
  enMayuscula = true;
  heroes: Heroe[] = [];
  ordenarPor = 'nombre';
  constructor() {}
  cambiar() {
    this.enMayuscula = !this.enMayuscula;
  }
  cambiarOrden(valor: string) {
    this.ordenarPor = valor;
  }
  ngOnInit(): void {
    this.heroes = [
      {
        nombre: 'spiderman',
        vuela: false,
        color: Color.rojo,
      },
      {
        nombre: 'batman',
        vuela: false,
        color: Color.negro,
      },
      {
        nombre: 'super man',
        vuela: true,
        color: Color.azul,
      },
      {
        nombre: 'hulk',
        vuela: false,
        color: Color.verde,
      },
      {
        nombre: 'black adam',
        vuela: true,
        color: Color.negro,
      },
    ];
  }
}
