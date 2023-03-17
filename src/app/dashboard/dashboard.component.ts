import { Component } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  
  movies:Movie[]=[];
  movieLenght:number | undefined;

  constructor(private movieService:MovieService) { }

  ngOnInit(){
    this.getMovies();
  }

  getMovies():void{
    this.movieService.getMovies()
      .subscribe(movies => {
        this.movies = movies.slice(0,3)
      this.movieLenght= movies.length;
      });
    
  }
}
