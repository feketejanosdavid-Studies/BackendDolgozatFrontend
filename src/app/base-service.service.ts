import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseServiceService {
  private dataSubject = new Subject();

  constructor(private http: HttpClient) {
    this.LoadAllMovies();
   }

  private url = 'http://localhost:3000/movies/';

  LoadAllMovies() {
    return this.http.get(this.url).subscribe(
      (movies) => this.dataSubject.next(movies)
    )
  }

  getAllMovies() {
    return this.dataSubject;
  }

  getMovieByID(id: number) {
    return this.http.get(this.url + id).forEach(() => this.LoadAllMovies());
  }

  createMovie(movie: any) {
    return this.http.post(this.url, movie).forEach(() => this.LoadAllMovies());
  }

  updateMovie(id: number, movie: any) {
    return this.http.put(this.url + id, movie).forEach(() => this.LoadAllMovies());
  }

  deleteMovie(id: number) {
    return this.http.delete(this.url + id).forEach(() => this.LoadAllMovies());
  }

  patchMovie(id: number, movie: any) {
    return this.http.patch(this.url + id, movie).forEach(() => this.LoadAllMovies());
  }
}
