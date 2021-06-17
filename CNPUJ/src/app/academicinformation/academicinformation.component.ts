import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-academicinformation',
  templateUrl: './academicinformation.component.html',
  styleUrls: ['./academicinformation.component.css']
})
export class AcademicinformationComponent implements OnInit {

  text: string;
  title: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data:any) {
    let value: number = data.value.toFixed(2);
    if(data.error){
      this.title = "Información incorrecta";
      this.text = "No puedes tener créditos actuales y un producto acumulado de 0."
    }
    else if(!data.needs){
      this.title = "No te preocupes";
      this.text = "Estás muy lejos de la prueba académica, puedes seguir tranquilo."
    }else{
      if(value > 5){
        this.title = "Problemas";
        this.text = "Dada tu información, no puedes salir de la prueba académica este semestre.";
      }else{
        this.title = "¡Vas bien!";
        this.text = `Tienes que sacar al menos ${value} en el promedio del siguiente semestre para evitar la prueba académica.`;
      }
    }
  }

  ngOnInit(): void {
  }

}
