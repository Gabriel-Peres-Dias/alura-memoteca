import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.scss']
})
export class PensamentoComponent implements OnInit {

  constructor(private service: PensamentoService) { }

  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: 'I love Angular',
    autoria: 'Gabriel Peres Dias',
    modelo: 'modelo2',
    favorito: false
  }

  @Input() listaFavoritos: Pensamento[] = [];

  ngOnInit(): void {
  }

  public larguraPensamento(): string {
    if (this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }

  public mudarIconeFavorito(): string {
    if (this.pensamento.favorito == false) {
      return 'inativo';
    }
    return 'ativo';
  }

  public atualizarFavorito() {
    this.service.mudarFavorito(this.pensamento).subscribe(() => {
      this.listaFavoritos.splice(this.listaFavoritos.indexOf(this.pensamento, 1));
    });
  }
}
