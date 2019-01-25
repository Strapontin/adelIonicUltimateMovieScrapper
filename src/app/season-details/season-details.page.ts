import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataProviderOMDbService } from '../services/data-provider-omdb.service';

@Component({
  selector: 'app-season-details',
  templateUrl: './season-details.page.html',
  styleUrls: ['./season-details.page.scss'],
})
export class SeasonDetailsPage implements OnInit {

  title: string;
  poster: string;

  id: string;
  season: number;
  episodes: Episode[];

  constructor(private route: ActivatedRoute, public dataProvider: DataProviderOMDbService) { }

  ngOnInit() {

    this.route.params.subscribe((params) => {

      // On récupère les infos passées dans l'url
      this.id = params['idSerie'];
      this.season = params['season'];


      // On récupère le titre de la série
      this.dataProvider.getDetails("series", this.id)
        .then(result => {

          this.title = result.data.Title;
          this.poster = result.data.Poster;
        });

      // On récupère le nombre d'épisodes
      this.dataProvider.getEpisodes(this.season, this.id)
        .then(dataResult => {

          this.episodes = [];

          for (let i = 0; i < dataResult.length; i++) {

            this.episodes[i] = new Episode();

            this.episodes[i].episodeNumber = dataResult[i].Episode;
            this.episodes[i].title = dataResult[i].Title;
            this.episodes[i].imdbID = dataResult[i].imdbID;
          }
        });
    });
  }
}


class Episode {

  episodeNumber: string;
  title: string;
  imdbID: string;
}