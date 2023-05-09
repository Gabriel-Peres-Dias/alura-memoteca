import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.scss']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }

  constructor(private service: PensamentoService, private router: Router) { }

  ngOnInit(): void {
  }

  public criarPensamento(): void {
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['listar-pensamento']);
    });
  }

  public cancelar(): void {
    this.router.navigate(['listar-pensamento']);
  }

}
