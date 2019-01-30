import { Injectable } from '@angular/core';
import { HttpProviderService } from './http-provider.service';

@Injectable({
  providedIn: 'root'
})
export class DataProviderOMDbService {

  // Url de base pour rechercher un film
  basicMovieUrl: string = "http://www.omdbapi.com/?apikey=75522b56&type=movie&s=";
  basicSerieUrl: string = "http://www.omdbapi.com/?apikey=75522b56&type=series&s=";

  basicDetailMovieUrl: string = "http://www.omdbapi.com/?apikey=75522b56&plot=full&type=movie&i=";
  basicDetailSeriesUrl: string = "http://www.omdbapi.com/?apikey=75522b56&plot=full&type=series&i=";
  basicDetailSeasonUrl: string = "http://www.omdbapi.com/?apikey=75522b56&plot=full&type=series&season=";
  basicDetailEpisodeUrl: string = "http://www.omdbapi.com/?apikey=75522b56&plot=full&type=episode&i=";

  basicImageUrl: string = "http://img.omdbapi.com/?apikey=75522b56&h=3000i=";

  constructor(public http: HttpProviderService) { }


  // Recherche tous les films correspondant au "title"
  findMovies(title: string) {

    let urlToSearch = this.basicMovieUrl + title;

    // Recherche en http
    return this.http.get(urlToSearch, {}, {})
      .then(data => {

        console.log("Données de recherche pour le film '" + title + "' reçues");
        return data;
      })
      .catch(error => {

        console.log("Erreurs lors de la recherche de détails pour l'url : '" + urlToSearch + "'. Détails de l'erreur :");
        console.log(error);
        return error;
      });
  }

  // Recherche tous les séries correspondant au "title"
  findSeries(title: string) {

    let urlToSearch = this.basicSerieUrl + title;

    // Recherche en http
    return this.http.get(urlToSearch, {}, {})
      .then(data => {

        console.log("Données de recherche de la série '" + title + "' reçues");
        return data;
      })
      .catch(error => {

        console.log("Erreurs lors de la recherche de détails pour l'url : '" + urlToSearch + "'. Détails de l'erreur :");
        console.log(error);
        return error;
      });
  }

  // Recherche les détails pour un id donné
  getDetails(type: string, id: string) {

    let urlToSearch;

    // On filtre les détails selon ce que l'on veut rechercher
    if (type === "movie") {
      urlToSearch = this.basicDetailMovieUrl + id;
    }
    else if (type === "series"){
      urlToSearch = this.basicDetailSeriesUrl + id;
    }
    else if (type === "episode") {
      urlToSearch = this.basicDetailEpisodeUrl + id;
    }

    // Recherche en http
    return this.http.get(urlToSearch, {}, {})
      .then(data => {

        console.log("Données de recherche pour l'id '" + id + "' reçues");
        console.log(data.data);
        return data;
      })
      .catch(error => {

        console.log("Erreurs lors de la recherche de détails pour l'url : '" + urlToSearch + "'. Détails de l'erreur :");
        console.log(error);
        return error;
      });
  }

  // Compte le nombre d'épisodes pour une saison
  getEpisodes(seasonNumber: number, id: string){

    let urlToSearch = this.basicDetailSeasonUrl + seasonNumber + "&i=" + id;

    // Recherche en http
    return this.http.get(urlToSearch, {}, {})
      .then(data => {

        return data.data.Episodes;
      })
      .catch(error => {

        console.log("Erreurs lors de la recherche de détails pour l'url : '" + urlToSearch + "'. Détails de l'erreur :");
        console.log(error);
        return error;
      });
  }

  // Renvoie l'image en haute qualité
  getImage(idMovie: string){

    let urlToSearch = this.basicImageUrl + idMovie;

    // Recherche en http
    return this.http.get(urlToSearch, {}, {})
      .then(data => {

        return data;
      })
      .catch(error => {

        console.log("Erreur lors de la recherche de l'image pour l'url : '" + urlToSearch +"'. Détails de l'erreur :");
        console.log(error);
      });
  }
}
