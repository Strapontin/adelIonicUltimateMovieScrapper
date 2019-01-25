import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataProviderOMDbService } from '../services/data-provider-omdb.service';
import { Url } from 'url';
import { Location } from '@angular/common';
import { IonicStorageModule } from '@ionic/storage';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {

  title: string;
  id: string;
  detailsMovie: DetailsMovie = new DetailsMovie();

  constructor(private route: ActivatedRoute, public dataProvider: DataProviderOMDbService, private location: Location) { }

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
  }

  onClickBack() {

    this.location.back();
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