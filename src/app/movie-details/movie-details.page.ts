import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataProviderOMDbService } from '../services/data-provider-omdb.service';
import { Url } from 'url';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {

  title: string;
  id: string;
  detailsMovie: DetailsMovie = new DetailsMovie();
  favoritesColor = "primary";

  constructor(private route: ActivatedRoute, public dataProvider: DataProviderOMDbService, private storage: Storage) { }

  ngOnInit() {

    this.route.params.subscribe((params) => {

      // On récupère l'id du film/série à recherhcer
      this.id = params['idMovie'];

      console.log("id = " + this.id);

      // On récupère les infos selon l'id      
      this.dataProvider.getDetails("movie", this.id).then((dataResult) => {

        console.log(dataResult);

        this.detailsMovie.title = dataResult.data.Title;
        this.detailsMovie.releaseYear = dataResult.data.Year;
        this.detailsMovie.minimumAge = dataResult.data.Rated;
        this.detailsMovie.poster = dataResult.data.Poster;
        this.detailsMovie.fullPlot = dataResult.data.Plot;
        this.detailsMovie.genre = dataResult.data.Genre;
        this.detailsMovie.producer = dataResult.data.Director;
        this.detailsMovie.actors = dataResult.data.Actors;
        this.detailsMovie.awards = dataResult.data.Awards;
        this.detailsMovie.imdbRating = dataResult.data.imdbRating;
        this.detailsMovie.imdbTotalVotes = dataResult.data.imdbVotes;
        this.detailsMovie.website = dataResult.data.Website;
        this.detailsMovie.duree = dataResult.data.Runtime;

        this.title = this.detailsMovie.title;
        
      }).catch(error => {

        console.log("Erreur lors de la récupération de détails :");
        console.log(error);
      });
    });


    // Si le film est dans les favoris lors du chargement on met l'icone en rouge pour dire que l'on supprime le favoris
    this.storage.get(this.id).then((val) => {
      
      // Si le film existe on met le bouton en rouge
      if (val !== null){
        this.favoritesColor = "danger";
      }
    });
  }

  // Lorsque l'on clique sur le bouton d'ajout des favoris
  clickFavorites(ionicButton) {

    // Si on veut enlever le film des favoris
    if (ionicButton.color === 'danger'){

      this.storage.remove(this.id);

      ionicButton.color =  'primary';
    }
    // Si on veut ajouter le film aux favoris
    else{

      this.storage.set(this.id, "movie");
      
      ionicButton.color = 'danger';
    }
  }

  clickImage() {

    this.dataProvider.getBigImage(this.id).then(result => {

      console.log(result);
    })
    .catch(() => {
      console.log("error");
    });
  }
}

export class DetailsMovie {

  title: string;
  releaseYear: number;
  minimumAge: number;
  poster: Url;
  fullPlot: string;
  genre: string;
  duree: string;
  producer: string;
  actors: string;
  awards: string;
  imdbRating: number;
  imdbTotalVotes: number;
  website: Url;
}