import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-gradeinformation',
  templateUrl: './gradeinformation.component.html',
  styleUrls: ['./gradeinformation.component.css']
})
export class GradeinformationComponent implements OnInit {

  text: string;
  title: string;
  grade: number;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    //Si los porcentajes suman más que 100
    if(data.err){
      this.title = "Error en los porcentajes";
      this.text = "Los porcentajes individuales no pueden sumar más del 100%";
    }else{
      this.grade = data.value.toFixed(2);
      if(data.needsGrade && this.grade <= 5){
        this.title = "¡Vas muy bien!";
        this.text = `Tienes que sacar ${this.grade} en el ${Math.round(data.remaining)}% restante.`;
      }else if(!data.needsGrade && data.remaining == 100){
        this.title = "¡Ya acabaste!";
        this.text = `La nota final te quedó en ${this.grade} ya que entraste el 100% de las notas.`;
      }else{
        if(data.value > 5){
          this.title = "Está complicado";
          this.text = `Necesitas sacar ${this.grade} en el ${Math.round(data.remaining)}% restante. Mejor suerte el próximo semestre.`
        }else{
          this.title = "¡Lo lograste!";
          this.text = "No necesitas sacar nota para pasar la materia.";
        }
      }
    }
  }

  ngOnInit(): void {
  }

}
