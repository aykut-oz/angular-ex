import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../models/movie';
import { MovieService } from '../movie.service';
import {Location} from '@angular/common'

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent {
  @Input() movie?:Movie;

  constructor(
    private movieService:MovieService,
    private route:ActivatedRoute,
    private location:Location
    ) {}

  ngOnInit(){
    this.getMovie();
  }

  getMovie():void{
      const id= +this.route.snapshot.paramMap.get('id');
      this.movieService.getMovie(id).subscribe(movie=>this.movie=movie);
  }

  save():void{
    this.movieService.update(this.movie).subscribe(()=>
    {
       this.location.back();
    });
  }
}