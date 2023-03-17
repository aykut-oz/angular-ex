import { Injectable } from '@angular/core';
import { Movie } from './models/movie';
import { Movies } from './movie/movie.datasource';
import {Observable,of} from 'rxjs';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private loggingService:LoggingService) { }

  getMovies():Observable<Movie[]>{
    this.loggingService.add('MovieService:listing movies');
    return of(Movies);
  }

  getMovie(id):Observable<Movie>{
    this.loggingService.add('MovieService:MovieDetail by Id='+id)
    return of(Movies.find(movie=>movie.id===id));
  }
}
