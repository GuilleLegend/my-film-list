import { Component, OnInit } from '@angular/core';
import { FilmService} from './film.service'
import { IFilm } from './IFilm.interface';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {
  
  films: Observable<IFilm>;
  search: string = '';

  constructor(private filmService: FilmService) { }

  ngOnInit() {
    this.films = this.filmService.getFilms();    
  }

  searchChanged():void{
    this.films = this.filmService.searchMovies(this.search);
  }
}
