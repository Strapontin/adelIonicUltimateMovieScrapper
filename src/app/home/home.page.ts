import { Component } from '@angular/core';
// import { DataProviderOMDbService } from '../services/data-provider-omdb.service';

import { TabMoviePage } from '../tab-movie/tab-movie.page';
import { TabSeriePage } from '../tab-serie/tab-serie.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  value: string;
  movieArray: any;
  showSearch: boolean = true;

  
  constructor(/*public movieData: DataProviderOMDbService*/) { }


  // // Lorsque l'on clique sur le bouton pour rechercher des films
  // onFindTitle() {

  //   // Recherche des films selon le titre souhaité
  //   this.movieData.findMovies(this.value).then((toto) => {
      
  //     let dataReceived = toto.data;

  //     // Si on a reçu une réponse correcte
  //     if (dataReceived.Response == "True"){

  //       console.log("data : ");
  //       console.log(dataReceived);

  //       // On envoie les valeurs des films reçus
  //       this.movieArray = dataReceived.Search;
  //     }
  //     else{

  //       console.log("Erreur : ");
  //       console.log(dataReceived.Error);

  //       console.log(dataReceived);
  //     }
  //   });

  //   // this.value = this.value + "s";
  // }

  // // Lors du clic sur le bouton pour cacher/afficher la searchbar
  // onClickSearch() {
  
  //   this.showSearch = !this.showSearch;
  // }
}


