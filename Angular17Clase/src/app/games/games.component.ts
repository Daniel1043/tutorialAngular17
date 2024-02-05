import { Component, Input, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
    <p>
      games works!
    </p>
    <p>Los juegos favoritos de {{nombreUsuario}} son éstos </p>
    <ul>
        @for (game of games; track game.id){
            <li (click)="juegoFavorito(game.name)">{{game.name}} </li>
        }
    </ul>+
  `,
  styles: ``
})
export class GamesComponent {
  @Input() nombreUsuario: string = "";
  @Output() comunicadorEventDeHijoAPadre = new EventEmitter<string>();

  games = [
    {id:1,
    name:"Fifa"},
    {id:2,
    name:"Lol"},
    {id:3,
    name:"Mario bros"}
  ]
  juegoFavorito(j: string):void{
    alert("A "+this.nombreUsuario+ " le gusta jugar a "+ j);
    this.comunicadorEventDeHijoAPadre.emit(j);
  }
}
