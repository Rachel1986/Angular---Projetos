import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular é muito bom!';
  n1: number = 0;
  n2: number = 0;
  tipoInput: string = 'text';
  valorAtual: number = 0;
  
  subtrair() {
    this.valorAtual -=1;
  }

  adicionar() {
    this.valorAtual +=1;
  }

  somar(x: number, y: number) {
    return x + y;
  }

  mudarTipoDoInput() : void {
    if(this.tipoInput == 'password') {
      this.tipoInput = 'text'
    } else {
      this.tipoInput = 'password'
    }
  }

 

}
