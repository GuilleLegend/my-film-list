import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { IFilm } from './IFilm.interface';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FilmService {  

  private URL = '';
  private API = '68d16e3f';
  private BASEURL = 'https://www.omdbapi.com/';  
  private APIURL = 'http://www.omdbapi.com/?apikey='+ this.API;
  
  constructor(private http: HttpClient) { }

  getFilms(): Observable<IFilm>{
    console.log(this.APIURL);
    return this.http.get<IFilm>(this.APIURL).pipe(map(films => films['Search']));
  }  

  searchMovies(title: string){
    this.URL = 'https://www.omdbapi.com/?s=' + title + '&type=movie&apikey=' + this.API;   
    console.log(this.URL);
    return this.http.get<IFilm>(this.URL).pipe(map(films => films['Search']));
    }

  getDetails(id: string){  
    console.log('https://www.omdbapi.com/?i='+ id +'&plot=full&apikey=' + this.API) 
    return this.http.get<IFilm>('https://www.omdbapi.com/?i=' + id + '&plot=full&apikey=' + this.API);
  }
}
