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
  constructor(private router: Router) { }

  ngOnInit(): void {
    if(this.router.url == '/CN/grades'){
      this.grades = true;
      this.titleInfo = "Pasar la materia";
    }else{
      this.titleInfo = "Evitar prueba académica";
    }
  }

}
