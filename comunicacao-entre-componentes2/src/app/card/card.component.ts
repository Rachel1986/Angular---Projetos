import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input()
  banner: string = './assets/Bebe.jpg'

  @Input()
  titulo: string = 'Essa é a Bebê. Aos 19 aninhos virou uma estrelinha e nos deixou muitas saudades.'

  @Input()
  userName: string = 'Bebê'

  @Input()
  userFoto: string = './assets/Bebe2.jpg'

  @Input()
  corBtn: string = 'black'

}
