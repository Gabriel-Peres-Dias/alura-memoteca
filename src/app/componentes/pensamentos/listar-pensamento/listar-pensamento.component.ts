import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.scss']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: 'Comunicação entre componentes',
      autoria: 'Gabriel Peres Dias',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Comunicação entre componentes 2, o inimigo agora é o JS',
      autoria: 'Dev',
      modelo: 'modelo1'
    }
    ,
    {
      conteudo: 'Comunicação entre componentes 3, o inimigo agora é o Ratinhoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
      autoria: 'Xarola',
      modelo: 'modelo3'
    }
  ];
  constructor() { }

  ngOnInit(): void {

  }

  public verificarPensamentos(): boolean {
    return this.listaPensamentos.length > 0;
  }

}
