import { CartaoDeCredito } from './interfaces/CartaoDeCredito';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formCartaoDeCredito: CartaoDeCredito = {
    ano: '',
    cvc: '',
    mes: '',
    nome: '',
    numero: ''
  }
}
