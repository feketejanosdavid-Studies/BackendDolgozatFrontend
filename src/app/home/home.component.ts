import { Component } from '@angular/core';
import { BaseServiceService } from '../base-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  movies:any

  columnDefs = [
    {key: 'id', text:'#', type: 'plain'},
    {key:'title', text:'title', type:'text'},
    {key:'director', text:'director', type:'text'},
    {key:'genre', text:'genre', type:'text'},
    {key:'release_year', text:'release year', type:'year'},
    {key:'poster', text:'poster', type:'url'}
  ]

  newMovie:any = []
  constructor(private baseService: BaseServiceService) {
    this.baseService.getAllMovies().subscribe(
      movies => this.movies = movies
    );
  }
  
  addMovie() {
    this.baseService.createMovie(this.newMovie)
    this.newMovie = {}
  }

  editMovie(movie: any) {
    this.baseService.updateMovie(movie.id, movie)
  }

  deleteMovie(id: number) {
    this.baseService.deleteMovie(id)
  }

}
