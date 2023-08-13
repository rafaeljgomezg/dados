import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dados';
  
  numero1:number =  Math.round(Math.random() * 5 + 1)
  numero2:number =  Math.round(Math.random() * 5 + 1)

  dadoIzquierda="../assets/img/dice"+this.numero1+".png"
  dadoDerecha="../assets/img/dice"+this.numero2+".png"
  ganaste:boolean=false


  tirarDados(){
    this.numero1 = Math.round(Math.random() * 5 + 1)  //genero numero entre 1 y 6 aleatorios
    this.numero2 = Math.round(Math.random() * 5 + 1)  //genero numero entre 1 y 6 aleatorios

    this.dadoDerecha="../assets/img/dice"+this.numero1+".png"
    this.dadoIzquierda="../assets/img/dice"+this.numero2+".png"
  }


}
