import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataProviderOMDbService } from '../services/data-provider-omdb.service';

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.page.html',
  styleUrls: ['./episode-details.page.scss'],
})
export class EpisodeDetailsPage implements OnInit {

  title: string;
  poster: string;

  id: string;
  episode: Episode;

  constructor(private route: ActivatedRoute, public dataProvider: DataProviderOMDbService) { }

  ngOnInit() {

    this.route.params.subscribe(params => {

      // On récupère l'id dans l'url
      this.id = params['idEpisode'];

      // Récupère les détails de l'épisode
      this.dataProvider.getDetails("episode", this.id)
        .then(result => {

          this.episode = new Episode();

          this.episode.title = result.data.Title;
          this.episode.releasedDate = result.data.Released;
          this.episode.length = result.data.Runtime;
          this.episode.plot = result.data.Plot;
          this.episode.imdbRating = result.data.imdbRating;
          this.episode.imdbTotalVotes = result.data.imdbVotes;

          this.title = this.episode.title;
          this.poster = result.data.Poster;
        });
    });
  }
}


class Episode {
  
  title: string;
  releasedDate: string;
  length: string;
  plot: string;
  imdbRating: string;
  imdbTotalVotes: string;
}