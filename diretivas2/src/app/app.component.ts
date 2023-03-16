import { Component } from '@angular/core';
import { Produto } from './interfaces/Produto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'diretivas2';
 
   nome: string = ''
   imagem: string = ''
   preco: number = 0
   estoque: number = 0
   descricao: string = ''

   produtos: Produto[] = []

   adicionarProduto(evento: any): void {
    evento.preventDefault()
    /**preventDefault() faz com que o comportamento
     * padrão de um elemento HTML seja anulado.
     */
    evento.stopPropagation()
    /**stopPropagation() evita que a emissão
     * do evento afete outros elementos HTML.
     */
    this.produtos.push({
      descricao: this.descricao,
      estoque: this.estoque,
      imagem: this.imagem,
      nome: this.nome,
      preco: this.preco
    })
    this.nome = ''
    this.descricao = ''
    this.imagem = ''
    this.estoque = 0
    this.preco = 0
   }

   deletarProduto(p: Produto): void {
    const index = this.produtos.indexOf(p)
    this.produtos.splice(index, 1)
   }
}
