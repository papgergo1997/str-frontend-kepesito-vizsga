import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  apiURL: string = 'https://tr360-frontend-exam-april.azurewebsites.net/papgergo1997/movies';
  movieList$: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>([]);

  constructor(private http: HttpClient) { }

  getMovieList(): void {
    this.http.get<Movie[]>(this.apiURL).subscribe(list => this.movieList$.next(list))
  }

  deleteMovie(id): any {
    return null;
  }
}
