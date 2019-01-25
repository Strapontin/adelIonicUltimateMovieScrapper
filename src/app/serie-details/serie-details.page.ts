import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataProviderOMDbService } from '../services/data-provider-omdb.service';
import { Url } from 'url';
import { Location } from '@angular/common';

@Component({
  selector: 'app-serie-details',
  templateUrl: './serie-details.page.html',
  styleUrls: ['./serie-details.page.scss'],
})
export class SerieDetailsPage implements OnInit {

  title: string;
  id: string;
  detailsSerie: DetailsSerie = new DetailsSerie();

  constructor(private route: ActivatedRoute, public dataProvider: DataProviderOMDbService, private location: Location) { }

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
  }

  // Click pour retourner en arrière
  onClickBack() {

    this.location.back();
  }

  // Compte le nombre de saisons
  countSeasons() {

    this.detailsSerie.seasons = [];

    for (let i = 0; i < this.detailsSerie.totalSeasons; i++) {

      // Enregistre le nom de la saison
      this.detailsSerie.seasons[i] = "Saison " + (i + 1).toString();
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

