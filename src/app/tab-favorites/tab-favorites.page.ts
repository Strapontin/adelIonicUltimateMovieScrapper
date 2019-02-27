import { Component, OnInit } from '@angular/core';
import { DataProviderOMDbService } from '../services/data-provider-omdb.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab-favorites',
  templateUrl: './tab-favorites.page.html',
  styleUrls: ['./tab-favorites.page.scss'],
})
export class TabFavoritesPage implements OnInit {

  favorites: Favorite[];

  constructor(private dataProvider: DataProviderOMDbService, private storage: Storage) { }

  ngOnInit() {

    this.RefreshFavorites();
  }

  // Génère l'url vers les détails de l'affiche selon son type (movie/series/episode)
  getUrl(type, id){

    if (type === "movie"){

      return "/movie-details/" + id + "/";
    }
    else if(type === "series"){

      return "/serie-details/" + id + "/";
    }
    else if (type === "episode"){

      return "/serie-details/episode-details/" + id + "/";
    }
  }

  // Lorsque l'on affiche la page
  ionViewWillEnter() {

    this.RefreshFavorites();
  }

  // Raffraichi la liste des favoris
  RefreshFavorites(){

    this.favorites = [];

    let favorite: Favorite;

    // On itère à travers chaque élément enregistré dans les favoris
    this.storage.forEach((value, key, index) => {

      this.dataProvider.getDetails(value, key).then(details => {

        favorite = new Favorite();

        favorite.id = key;
        favorite.poster = details.data.Poster;
        favorite.title = details.data.Title;

        favorite.urlDetails = this.getUrl(value, key);

        this.favorites[index.valueOf() - 1] = favorite;
      });

    }).catch(error => {

      console.log(error);
    });
  }
}


class Favorite {

  id: string;
  urlDetails: string;
  poster: string;
  title: string;
}