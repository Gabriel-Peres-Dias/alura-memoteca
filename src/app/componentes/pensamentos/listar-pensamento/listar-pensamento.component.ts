import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.scss']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos: Pensamento[] = [];
  paginaAtual: number = 1;
  haMaisPensamentos: boolean = true;
  filtro: string = '';
  favoritos: boolean = false;
  listaFavoritos: Pensamento[] = [];
  titulo: string = 'Meu Mural';

  constructor(
    private service: PensamentoService,
    private router: Router) { }

  ngOnInit(): void {
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe((listaPensamentos: Pensamento[]) => {
      this.listaPensamentos = listaPensamentos;
    });
  }

  public verificarPensamentos(): boolean {
    return this.listaPensamentos.length > 0;
  }

  public carregarMaisPensamentos(): void {
    this.service.listar(++this.paginaAtual, this.filtro, this.favoritos).subscribe((listaPensamentos: Pensamento[]) => {
      this.listaPensamentos.push(...listaPensamentos);
      if (!listaPensamentos.length) {
        this.haMaisPensamentos = false;
      }
    })
  }

  public pesquisarPensamentos(): void {
    this.paginaAtual = 1;
    this.haMaisPensamentos = true;
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe((listaPensamentos: Pensamento[]) => {
      this.listaPensamentos = listaPensamentos;
    })
  }

  public listarFavoritos(): void {
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.favoritos = true;
    this.titulo = 'Favoritos';
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe((listaPensamentosFavoritos: Pensamento[]) => {
      this.listaPensamentos = listaPensamentosFavoritos;
      this.listaFavoritos = listaPensamentosFavoritos;
    })
  }

  public recarregarComponente() {
    this.favoritos = false;
    this.paginaAtual = 1;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url]);
  }

}
