import { Injectable } from '@angular/core';
import { HttpProviderService } from './http-provider.service';

@Injectable({
  providedIn: 'root'
})
export class DataProviderOMDbService {

  // Url de base pour rechercher un film
  basicMovieUrl: string = "http://www.omdbapi.com/?apikey=75522b56&type=movie&s=";
  basicSerieUrl: string = "http://www.omdbapi.com/?apikey=75522b56&type=series&s=";


  constructor(public http: HttpProviderService) { }


  // Recherche tous les films correspondant au "title"
  findMovies(title: string){
    
    let urlToSearch = this.basicMovieUrl + title;

    // Recherche en http
    return this.http.get(urlToSearch, {}, {})
      .then(data => {

        console.log("Données de recherche d'un film reçues");
        return data;
      })
      .catch(error => {

        console.log("Erreurs lors de la recherche d'un film : ");
        console.log(error);
        return error;
      });
  }

  // Recherche tous les séries correspondant au "title"
  findSeries(title: string){
    
    let urlToSearch = this.basicSerieUrl + title;

    // Recherche en http
    return this.http.get(urlToSearch, {}, {})
      .then(data => {

        console.log("Données de recherche d'un film reçues");
        return data;
      })
      .catch(error => {

        console.log("Erreurs lors de la recherche d'un film : ");
        console.log(error);
        return error;
      });
  }
}
