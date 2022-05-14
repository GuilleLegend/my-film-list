import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';
import { ActivatedRoute } from '@angular/router';
import { IFilm } from '../IFilm.interface';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.page.html',
  styleUrls: ['./film-details.page.scss'],
})
export class FilmDetailsPage implements OnInit {

  film: object = null;
  
  constructor(private filmService: FilmService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id);
    this.filmService.getDetails(id).subscribe(result => this.film = result);
  }

}
