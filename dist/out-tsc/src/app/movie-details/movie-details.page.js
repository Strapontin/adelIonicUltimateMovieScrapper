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
import { ActivatedRoute } from '@angular/router';
import { DataProviderOMDbService } from '../services/data-provider-omdb.service';
import { Location } from '@angular/common';
var MovieDetailsPage = /** @class */ (function () {
    function MovieDetailsPage(route, dataProvider, location) {
        this.route = route;
        this.dataProvider = dataProvider;
        this.location = location;
        this.detailsMovie = new DetailsMovie();
    }
    MovieDetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            // On récupère l'id du film/série à recherhcer
            _this.id = params['idMovie'];
            console.log("id = " + _this.id);
            // On récupère les infos selon l'id      
            _this.dataProvider.getDetails("movie", _this.id).then(function (dataResult) {
                console.log(dataResult);
                _this.detailsMovie.title = dataResult.data.Title;
                _this.detailsMovie.releaseYear = dataResult.data.Year;
                _this.detailsMovie.minimumAge = dataResult.data.Rated;
                _this.detailsMovie.poster = dataResult.data.Poster;
                _this.detailsMovie.fullPlot = dataResult.data.Plot;
                _this.detailsMovie.genre = dataResult.data.Genre;
                _this.detailsMovie.producer = dataResult.data.Director;
                _this.detailsMovie.actors = dataResult.data.Actors;
                _this.detailsMovie.awards = dataResult.data.Awards;
                _this.detailsMovie.imdbRating = dataResult.data.imdbRating;
                _this.detailsMovie.imdbTotalVotes = dataResult.data.imdbVotes;
                _this.detailsMovie.website = dataResult.data.Website;
                _this.detailsMovie.duree = dataResult.data.Runtime;
                _this.title = _this.detailsMovie.title;
            }).catch(function (error) {
                console.log("Erreur lors de la récupération de détails :");
                console.log(error);
            });
        });
    };
    MovieDetailsPage.prototype.clickFavorites = function (ionicButton) {
        if (ionicButton._color === 'danger')
            ionicButton.color = 'primary';
        else
            ionicButton.color = 'danger';
    };
    MovieDetailsPage = __decorate([
        Component({
            selector: 'app-movie-details',
            templateUrl: './movie-details.page.html',
            styleUrls: ['./movie-details.page.scss'],
        }),
        __metadata("design:paramtypes", [ActivatedRoute, DataProviderOMDbService, Location])
    ], MovieDetailsPage);
    return MovieDetailsPage;
}());
export { MovieDetailsPage };
var DetailsMovie = /** @class */ (function () {
    function DetailsMovie() {
    }
    return DetailsMovie;
}());
export { DetailsMovie };
//# sourceMappingURL=movie-details.page.js.map