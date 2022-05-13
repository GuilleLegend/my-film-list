import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {

  private films = [
    {
      id: '1',
      title: 'First Film',
      image: 'https://www.piubellamodels.com/wp-content/uploads/2019/02/film.jpg',
      comments: ['Wow', 'Xd']
    },
    {
      id: '2',
      title: 'Second Film',
      image: 'https://edicionesnemo.es/wp-content/uploads/2019/06/film-1155439_1280.jpg',
      comments: ['Wow', 'Xd']
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
