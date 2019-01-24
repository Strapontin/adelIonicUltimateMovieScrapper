import { Component, OnInit } from '@angular/core';
import { DataProviderOMDbService } from '../services/data-provider-omdb.service';

@Component({
  selector: 'app-tab-serie',
  templateUrl: './tab-serie.page.html',
  styleUrls: ['./tab-serie.page.scss'],
})
export class TabSeriePage implements OnInit {

  ngOnInit() {
  }

  value: string;
  movieArray: any;
  showSearch: boolean = true;

  constructor(public serieDataProvider: DataProviderOMDbService) { }


  // Lorsque l'on clique sur le bouton pour rechercher des films
  onFindTitle() {

    // Recherche des films selon le titre souhaité
    this.serieDataProvider.findSeries(this.value).then((serieData) => {
      
      let dataReceived = serieData.data;

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
  
    this.showSearch = !this.showSearch;
  }
}
