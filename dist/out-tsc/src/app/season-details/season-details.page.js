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
var SeasonDetailsPage = /** @class */ (function () {
    function SeasonDetailsPage(route, dataProvider) {
        this.route = route;
        this.dataProvider = dataProvider;
    }
    SeasonDetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            // On récupère les infos passées dans l'url
            _this.id = params['idSerie'];
            _this.season = params['season'];
            // On récupère le titre de la série
            _this.dataProvider.getDetails("series", _this.id)
                .then(function (result) {
                _this.title = result.data.Title;
                _this.poster = result.data.Poster;
            });
            // On récupère le nombre d'épisodes
            _this.dataProvider.getEpisodes(_this.season, _this.id)
                .then(function (dataResult) {
                _this.episodes = [];
                for (var i = 0; i < dataResult.length; i++) {
                    _this.episodes[i] = new Episode();
                    _this.episodes[i].episodeNumber = dataResult[i].Episode;
                    _this.episodes[i].title = dataResult[i].Title;
                    _this.episodes[i].imdbID = dataResult[i].imdbID;
                }
            });
        });
    };
    SeasonDetailsPage = __decorate([
        Component({
            selector: 'app-season-details',
            templateUrl: './season-details.page.html',
            styleUrls: ['./season-details.page.scss'],
        }),
        __metadata("design:paramtypes", [ActivatedRoute, DataProviderOMDbService])
    ], SeasonDetailsPage);
    return SeasonDetailsPage;
}());
export { SeasonDetailsPage };
var Episode = /** @class */ (function () {
    function Episode() {
    }
    return Episode;
}());
//# sourceMappingURL=season-details.page.js.map