import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.scss']
})
export class PensamentoComponent implements OnInit {

  constructor() { }

  @Input() pensamento = {
    conteudo: 'I love Angular',
    autoria: 'Gabriel Peres Dias',
    modelo: 'modelo2'
  }

  ngOnInit(): void {
  }

  public larguraPensamento(): string {
    if (this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }
}
