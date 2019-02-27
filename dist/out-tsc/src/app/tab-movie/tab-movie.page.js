var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { DataProviderOMDbService } from '../services/data-provider-omdb.service';
var TabMoviePage = /** @class */ (function () {
    function TabMoviePage(movieDataProvider) {
        this.movieDataProvider = movieDataProvider;
        this.showSearch = true;
    }
    TabMoviePage.prototype.ngOnInit = function () {
    };
    // Lorsque l'on clique sur le bouton pour rechercher des films
    TabMoviePage.prototype.onFindTitle = function () {
        var _this = this;
        // Recherche des films selon le titre souhaité
        this.movieDataProvider.findMovies(this.value).then(function (movieData) {
            var dataReceived = movieData.data;
            // Si on a reçu une réponse correcte
            if (dataReceived.Response == "True") {
                console.log("data : ");
                console.log(dataReceived);
                // On envoie les valeurs des films reçus
                _this.movieArray = dataReceived.Search;
            }
            else {
                console.log("Erreur : ");
                console.log(dataReceived.Error);
                console.log(dataReceived);
            }
        });
    };
    // Lors du clic sur le bouton pour cacher/afficher la searchbar
    TabMoviePage.prototype.onClickSearch = function () {
        // On cache ou affiche la barre de recherche
        this.showSearch = !this.showSearch;
    };
    TabMoviePage = __decorate([
        Component({
            selector: 'app-tab-movie',
            templateUrl: './tab-movie.page.html',
            styleUrls: ['./tab-movie.page.scss'],
        }),
        __metadata("design:paramtypes", [DataProviderOMDbService])
    ], TabMoviePage);
    return TabMoviePage;
}());
export { TabMoviePage };
//# sourceMappingURL=tab-movie.page.js.map