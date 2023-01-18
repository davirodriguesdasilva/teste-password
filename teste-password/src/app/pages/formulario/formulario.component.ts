import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  nome: any;
  senha: any

  receberValor(valor: string) {
    this.senha = valor
  }

  constructor() { }

  ngOnInit(): void {
  }

}
