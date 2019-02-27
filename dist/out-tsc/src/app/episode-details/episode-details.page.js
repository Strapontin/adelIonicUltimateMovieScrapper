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
var EpisodeDetailsPage = /** @class */ (function () {
    function EpisodeDetailsPage(route, dataProvider) {
        this.route = route;
        this.dataProvider = dataProvider;
        this.episode = new Episode();
    }
    EpisodeDetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            // On récupère l'id dans l'url
            _this.id = params['idEpisode'];
            // Récupère les détails de l'épisode
            _this.dataProvider.getDetails("episode", _this.id)
                .then(function (result) {
                _this.episode = new Episode();
                _this.episode.title = result.data.Title;
                _this.episode.releasedDate = result.data.Released;
                _this.episode.length = result.data.Runtime;
                _this.episode.plot = result.data.Plot;
                _this.episode.imdbRating = result.data.imdbRating;
                _this.episode.imdbTotalVotes = result.data.imdbVotes;
                _this.title = _this.episode.title;
                _this.poster = result.data.Poster;
            });
        });
    };
    EpisodeDetailsPage = __decorate([
        Component({
            selector: 'app-episode-details',
            templateUrl: './episode-details.page.html',
            styleUrls: ['./episode-details.page.scss'],
        }),
        __metadata("design:paramtypes", [ActivatedRoute, DataProviderOMDbService])
    ], EpisodeDetailsPage);
    return EpisodeDetailsPage;
}());
export { EpisodeDetailsPage };
var Episode = /** @class */ (function () {
    function Episode() {
    }
    return Episode;
}());
//# sourceMappingURL=episode-details.page.js.map