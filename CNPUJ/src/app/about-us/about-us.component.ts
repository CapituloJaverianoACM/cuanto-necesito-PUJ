import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  information = [
    {
      name: 'Juan Francisco Hamon',
      description: 'Estudiante de ingeniería de sistemas de la Pontificia Universidad Javeriana con énfasis en construcción de software y sistemas inteligentes.',
      image: 'assets/photos/Juan_Hamon.jpg'
    },
    {
      name: 'Camilo Andrés Buitrago',
      description: 'Estudiante de ingeniería de sistemas de la Pontificia Universidad Javeriana con énfasis en construcción de software.',
      image: 'assets/photos/Camilo_Buitrago.jpg'
    },
    {
      name: 'Kevin Andrés Garzón',
      description: 'Estudiante de ingeniería de sistemas de la Pontificia Universidad Javeriana, 20 años, Interesado en la innovación y el aprender constante.',
      image: 'assets/photos/Kevin_Garzon.jpg'
    },
    {
      name: 'Camilo Alejandro Nossa',
      description: 'Estudiante de ingeniería de sistemas de la Pontificia Universidad Javeriana, apasionado por la tecnología y la informática, dispuesto a aprender algo nuevo cada día.',
      image: 'assets/photos/Camilo_Nossa.jpg'
    },
    {
      name: 'Santiago Camilo Rey',
      description: 'Estudiante de ingeniería de sistemas de la Pontificia Universidad Javeriana de 18 años. Soy una persona alegre, ingeniosa, y siempre dispuesto a aprender.',
      image: 'assets/photos/Santiago_Rey.jpg'
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
