import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataProviderOMDbService } from '../services/data-provider-omdb.service';
import { Url } from 'url';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-serie-details',
  templateUrl: './serie-details.page.html',
  styleUrls: ['./serie-details.page.scss'],
})
export class SerieDetailsPage implements OnInit {

  title: string;
  id: string;
  detailsSerie: DetailsSerie = new DetailsSerie();
  favoritesColor = "primary";

  constructor(private route: ActivatedRoute, public dataProvider: DataProviderOMDbService, private storage: Storage) { }

  ngOnInit() {

    this.route.params.subscribe((params) => {

      // On récupère l'id du film/série à recherhcer
      this.id = params['idSerie'];

      console.log("id = " + this.id);

      // On récupère les infos selon l'id      
      this.dataProvider.getDetails("series", this.id)
        .then((dataResult) => {

        this.detailsSerie.title = dataResult.data.Title;
        this.detailsSerie.releaseYear = dataResult.data.Year;
        this.detailsSerie.minimumAge = dataResult.data.Rated;
        this.detailsSerie.poster = dataResult.data.Poster;
        this.detailsSerie.fullPlot = dataResult.data.Plot;
        this.detailsSerie.genre = dataResult.data.Genre;
        this.detailsSerie.producer = dataResult.data.Director;
        this.detailsSerie.actors = dataResult.data.Actors;
        this.detailsSerie.awards = dataResult.data.Awards;
        this.detailsSerie.imdbRating = dataResult.data.imdbRating;
        this.detailsSerie.imdbTotalVotes = dataResult.data.imdbVotes;
        this.detailsSerie.website = dataResult.data.Website;
        this.detailsSerie.totalSeasons = dataResult.data.totalSeasons;

        this.title = this.detailsSerie.title;

        this.countSeasons();

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

  // Compte le nombre de saisons
  countSeasons() {

    this.detailsSerie.seasons = [];

    for (let i = 0; i < this.detailsSerie.totalSeasons; i++) {

      // Enregistre le nom de la saison
      this.detailsSerie.seasons[i] = "Saison " + (i + 1).toString();
    }
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

      this.storage.set(this.id, "series");
      
      ionicButton.color = 'danger';
    }
  }
}

class DetailsSerie {

  title: string;
  releaseYear: number;
  minimumAge: number;
  poster: Url;
  fullPlot: string;
  genre: string;
  producer: string;
  actors: string;
  awards: string;
  imdbRating: number;
  imdbTotalVotes: number;
  website: Url;
  totalSeasons: number;
  seasons: string[];
}

