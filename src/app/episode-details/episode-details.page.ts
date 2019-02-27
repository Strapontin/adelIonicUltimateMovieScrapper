import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataProviderOMDbService } from '../services/data-provider-omdb.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.page.html',
  styleUrls: ['./episode-details.page.scss'],
})
export class EpisodeDetailsPage implements OnInit {

  title: string;
  poster: string;

  id: string;
  episode: Episode = new Episode();
  favoritesColor = "primary";

  constructor(private route: ActivatedRoute, public dataProvider: DataProviderOMDbService, private storage: Storage) { }

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

      this.storage.set(this.id, "episode");
      
      ionicButton.color = 'danger';
    }
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