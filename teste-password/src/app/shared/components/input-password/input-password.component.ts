import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.css']
})
export class InputPasswordComponent implements OnInit {

  @Output() valorEnviado = new EventEmitter<string>();
  @Input() label: any;
  valor: any;
  tipoInput = true;

  constructor() { }

  ngOnInit(): void {
  }

  mudarTipoInput(){
    this.tipoInput = !this.tipoInput
  }

  enviarValor(valor: string) {
    this.valorEnviado.emit(valor);
  }
}
