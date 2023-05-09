import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.scss']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento = {
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo2'
  }

  constructor() { }

  ngOnInit(): void {
  }

  public criarPensamento(): void {
    alert('criquei crias');
  }

  public cancelar(): void {
    alert('cancelado');
  }

}
