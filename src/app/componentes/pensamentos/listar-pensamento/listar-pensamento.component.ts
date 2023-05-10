import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.scss']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos: Pensamento[] = [];
  paginaAtual: number = 1;
  haMaisPensamentos: boolean = true;
  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
    this.service.listar(this.paginaAtual).subscribe((listaPensamentos: Pensamento[]) => {
      this.listaPensamentos = listaPensamentos;
    });
  }

  public verificarPensamentos(): boolean {
    return this.listaPensamentos.length > 0;
  }

  public carregarMaisPensamentos(): void {
    this.service.listar(++this.paginaAtual).subscribe((listaPensamentos: Pensamento[]) => {
      this.listaPensamentos.push(...listaPensamentos);
      if (!listaPensamentos.length) {
        this.haMaisPensamentos = false;
      }
    })
  }

}
