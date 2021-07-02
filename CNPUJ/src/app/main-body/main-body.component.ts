import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent implements OnInit {

  grades: boolean = false;
  titleInfo: string = "";
  description: string = "";
  constructor(private router: Router) { }

  ngOnInit(): void {
    if(this.router.url == '/CN/grades'){
      this.grades = true;
      this.titleInfo = "Pasar la materia";
      this.description = `Ingresa las notas de la clase junto con su porcentaje, con eso sabrás cuanto necesitas para pasar. 
      Recuerda que la nota máxima es de 5.0 y la suma de los porcentajes no pueden sumar más del 100%.`
    }else{
      this.titleInfo = "Evitar prueba académica";
      this.description = `Ingresa la cantidad de créditos que has cursado hasta ahora, la cantidad de créditos que deseas ver el
      próximo semestre y el producto acumulado actual. Este último lo puedes encontrar en Intranet, en el apartado de calificaciones.`
    }
  }

}
