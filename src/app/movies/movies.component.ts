import { Component } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieService } from '../movie.service';
import { LoggingService } from '../logging.service';
import {Location} from '@angular/common'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  title = 'Movie List';
  movies?: Movie[];
  selectedMovie?: Movie;
  constructor(
    private movieService: MovieService,    
    private location:Location,
    private loggingService:LoggingService
    ) { }
  ngOnInit(): void {
    this.getMovies();
  }
  getMovies(): void {
  this.movieService.getMovies()
  .subscribe(movies=>{
     this.movies=movies;
   });
    
  }
  onSelect(item: Movie): void {
   
    this.selectedMovie = item;
    this.loggingService.add('MovieService: Selected'+item.name);
  }

  add(name:string,imageUrl:string,description:string):void{
      this.movieService.add(
        {
          name,
          imageUrl,
          description
        } as Movie
      ).subscribe(
        movie=>this.movies.push(movie)
      )
  }

  delete(movie:Movie):void{
    this.movies=this.movies.filter(m=>m!==movie);
    this.movieService.delete(movie).subscribe((m)=>{
      debugger;
      console.log(movie.id);
    })
  }
}
