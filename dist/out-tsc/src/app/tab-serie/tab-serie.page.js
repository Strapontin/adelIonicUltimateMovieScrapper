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
var TabSeriePage = /** @class */ (function () {
    function TabSeriePage(serieDataProvider) {
        this.serieDataProvider = serieDataProvider;
        this.showSearch = true;
    }
    TabSeriePage.prototype.ngOnInit = function () {
    };
    // Lorsque l'on clique sur le bouton pour rechercher des films
    TabSeriePage.prototype.onFindTitle = function () {
        var _this = this;
        // Recherche des films selon le titre souhaité
        this.serieDataProvider.findSeries(this.value).then(function (serieData) {
            var dataReceived = serieData.data;
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
    TabSeriePage.prototype.onClickSearch = function () {
        this.showSearch = !this.showSearch;
    };
    TabSeriePage = __decorate([
        Component({
            selector: 'app-tab-serie',
            templateUrl: './tab-serie.page.html',
            styleUrls: ['./tab-serie.page.scss'],
        }),
        __metadata("design:paramtypes", [DataProviderOMDbService])
    ], TabSeriePage);
    return TabSeriePage;
}());
export { TabSeriePage };
//# sourceMappingURL=tab-serie.page.js.map