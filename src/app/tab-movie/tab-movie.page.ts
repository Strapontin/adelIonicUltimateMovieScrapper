import { Component, OnInit, ViewChild } from '@angular/core';
import { DataProviderOMDbService } from '../services/data-provider-omdb.service';

@Component({
  selector: 'app-tab-movie',
  templateUrl: './tab-movie.page.html',
  styleUrls: ['./tab-movie.page.scss'],
})
export class TabMoviePage implements OnInit {

  ngOnInit() {
  }

  value: string;
  movieArray: any;
  showSearch: boolean = true;

  constructor(public movieDataProvider: DataProviderOMDbService) { }


  // Lorsque l'on clique sur le bouton pour rechercher des films
    onFindTitle() {

    // Recherche des films selon le titre souhaité
    this.movieDataProvider.findMovies(this.value).then((movieData) => {
      
      let dataReceived = movieData.data;

      // Si on a reçu une réponse correcte
      if (dataReceived.Response == "True"){

        console.log("data : ");
        console.log(dataReceived);

        // On envoie les valeurs des films reçus
        this.movieArray = dataReceived.Search;
      }
      else{

        console.log("Erreur : ");
        console.log(dataReceived.Error);

        console.log(dataReceived);
      }
    });
  }

  // Lors du clic sur le bouton pour cacher/afficher la searchbar
  onClickSearch() {
  
    // On cache ou affiche la barre de recherche
    this.showSearch = !this.showSearch;
  }
}
