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
import { ActivatedRoute, Router } from '@angular/router';
import { DataProviderOMDbService } from '../services/data-provider-omdb.service';
import { Location } from '@angular/common';
var SerieDetailsPage = /** @class */ (function () {
    function SerieDetailsPage(route, dataProvider, location, router) {
        this.route = route;
        this.dataProvider = dataProvider;
        this.location = location;
        this.router = router;
        this.detailsSerie = new DetailsSerie();
    }
    SerieDetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            // On récupère l'id du film/série à recherhcer
            _this.id = params['idSerie'];
            console.log("id = " + _this.id);
            // On récupère les infos selon l'id      
            _this.dataProvider.getDetails("series", _this.id)
                .then(function (dataResult) {
                _this.detailsSerie.title = dataResult.data.Title;
                _this.detailsSerie.releaseYear = dataResult.data.Year;
                _this.detailsSerie.minimumAge = dataResult.data.Rated;
                _this.detailsSerie.poster = dataResult.data.Poster;
                _this.detailsSerie.fullPlot = dataResult.data.Plot;
                _this.detailsSerie.genre = dataResult.data.Genre;
                _this.detailsSerie.producer = dataResult.data.Director;
                _this.detailsSerie.actors = dataResult.data.Actors;
                _this.detailsSerie.awards = dataResult.data.Awards;
                _this.detailsSerie.imdbRating = dataResult.data.imdbRating;
                _this.detailsSerie.imdbTotalVotes = dataResult.data.imdbVotes;
                _this.detailsSerie.website = dataResult.data.Website;
                _this.detailsSerie.totalSeasons = dataResult.data.totalSeasons;
                _this.title = _this.detailsSerie.title;
                _this.countSeasons();
            }).catch(function (error) {
                console.log("Erreur lors de la récupération de détails :");
                console.log(error);
            });
        });
    };
    // Click pour retourner en arrière
    SerieDetailsPage.prototype.onClickBack = function () {
        // this.location.back();
        this.router.navigateByUrl('home');
    };
    // Compte le nombre de saisons
    SerieDetailsPage.prototype.countSeasons = function () {
        this.detailsSerie.seasons = [];
        for (var i = 0; i < this.detailsSerie.totalSeasons; i++) {
            // Enregistre le nom de la saison
            this.detailsSerie.seasons[i] = "Saison " + (i + 1).toString();
        }
    };
    SerieDetailsPage = __decorate([
        Component({
            selector: 'app-serie-details',
            templateUrl: './serie-details.page.html',
            styleUrls: ['./serie-details.page.scss'],
        }),
        __metadata("design:paramtypes", [ActivatedRoute, DataProviderOMDbService, Location, Router])
    ], SerieDetailsPage);
    return SerieDetailsPage;
}());
export { SerieDetailsPage };
var DetailsSerie = /** @class */ (function () {
    function DetailsSerie() {
    }
    return DetailsSerie;
}());
//# sourceMappingURL=serie-details.page.js.map