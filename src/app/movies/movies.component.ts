import { Component } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieService } from '../movie.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  title = 'Movie List';
  movies?: Movie[];
  selectedMovie?: Movie;
  constructor(private movieService: MovieService,private loggingService:LoggingService) { }
  ngOnInit(): void {
    this.getMovies();
  }
  getMovies(): void {
  this.movieService.getMovies().subscribe(movies=>{
     this.movies=movies;
   });
    
  }
  onSelect(item: Movie): void {
   
    this.selectedMovie = item;
    this.loggingService.add('MovieService: Selected'+item.name);
  }
}
