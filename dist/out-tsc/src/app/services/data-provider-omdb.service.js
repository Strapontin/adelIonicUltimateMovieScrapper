var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpProviderService } from './http-provider.service';
var DataProviderOMDbService = /** @class */ (function () {
    function DataProviderOMDbService(http) {
        this.http = http;
        // Url de base pour rechercher un film
        this.basicMovieUrl = "http://www.omdbapi.com/?apikey=75522b56&type=movie&s=";
        this.basicSerieUrl = "http://www.omdbapi.com/?apikey=75522b56&type=series&s=";
        this.basicDetailMovieUrl = "http://www.omdbapi.com/?apikey=75522b56&plot=full&type=movie&i=";
        this.basicDetailSeriesUrl = "http://www.omdbapi.com/?apikey=75522b56&plot=full&type=series&i=";
        this.basicDetailSeasonUrl = "http://www.omdbapi.com/?apikey=75522b56&plot=full&type=series&season=";
        this.basicDetailEpisodeUrl = "http://www.omdbapi.com/?apikey=75522b56&plot=full&type=episode&i=";
        this.basicBigImageUrl = "http://img.omdbapi.com/?apikey=75522b56&h=3000&i=";
        this.basicSmallImageUrl = "http://img.omdbapi.com/?apikey=75522b56&h=3000&i=";
    }
    // Recherche tous les films correspondant au "title"
    DataProviderOMDbService.prototype.findMovies = function (title) {
        var urlToSearch = this.basicMovieUrl + title;
        // Recherche en http
        return this.http.get(urlToSearch, {}, {})
            .then(function (data) {
            console.log("Données pour le film avec comme url '" + urlToSearch + "' reçues");
            return data;
        })
            .catch(function (error) {
            console.log("Erreurs lors de la recherche de détails pour l'url : '" + urlToSearch + "'. Détails de l'erreur :");
            console.log(error);
            return error;
        });
    };
    // Recherche tous les séries correspondant au "title"
    DataProviderOMDbService.prototype.findSeries = function (title) {
        var urlToSearch = this.basicSerieUrl + title;
        // Recherche en http
        return this.http.get(urlToSearch, {}, {})
            .then(function (data) {
            console.log("Données pour la série avec comme url '" + urlToSearch + "' reçues");
            return data;
        })
            .catch(function (error) {
            console.log("Erreurs lors de la recherche de détails pour l'url : '" + urlToSearch + "'. Détails de l'erreur :");
            console.log(error);
            return error;
        });
    };
    // Recherche les détails pour un id donné
    DataProviderOMDbService.prototype.getDetails = function (type, id) {
        var urlToSearch;
        // On filtre les détails selon ce que l'on veut rechercher
        if (type === "movie") {
            urlToSearch = this.basicDetailMovieUrl + id;
        }
        else if (type === "series") {
            urlToSearch = this.basicDetailSeriesUrl + id;
        }
        else if (type === "episode") {
            urlToSearch = this.basicDetailEpisodeUrl + id;
        }
        // Recherche en http
        return this.http.get(urlToSearch, {}, {})
            .then(function (data) {
            console.log("Détails pour le type '" + type + "' et l'url '" + urlToSearch + "' reçues");
            console.log(data.data);
            return data;
        })
            .catch(function (error) {
            console.log("Erreurs lors de la recherche de détails pour l'url : '" + urlToSearch + "'. Détails de l'erreur :");
            console.log(error);
            return error;
        });
    };
    // Compte le nombre d'épisodes pour une saison
    DataProviderOMDbService.prototype.getEpisodes = function (seasonNumber, id) {
        var urlToSearch = this.basicDetailSeasonUrl + seasonNumber + "&i=" + id;
        // Recherche en http
        return this.http.get(urlToSearch, {}, {})
            .then(function (data) {
            console.log("Episodes pour l'url '" + urlToSearch + "' récupérés");
            return data.data.Episodes;
        })
            .catch(function (error) {
            console.log("Erreurs lors de la recherche de détails pour l'url : '" + urlToSearch + "'. Détails de l'erreur :");
            console.log(error);
            return error;
        });
    };
    // Renvoie l'image en haute qualité
    DataProviderOMDbService.prototype.getBigImage = function (idMovie) {
        var urlToSearch = this.basicBigImageUrl + idMovie;
        // Recherche en http
        return this.http.get(urlToSearch, {}, {})
            .then(function (data) {
            console.log("Grande image pour l'url '" + urlToSearch + "' récupérés");
            return data;
        })
            .catch(function (error) {
            console.log("Erreur lors de la recherche de l'image pour l'url : '" + urlToSearch + "'. Détails de l'erreur :");
            console.log(error);
        });
    };
    // Renvoie l'image en basse qualité
    DataProviderOMDbService.prototype.getSmallImage = function (idMovie) {
        var urlToSearch = this.basicSmallImageUrl + idMovie;
        // Recherche en http
        return this.http.get(urlToSearch, {}, {})
            .then(function (data) {
            console.log("Petite image pour l'url '" + urlToSearch + "' récupérés");
            return data;
        })
            .catch(function (error) {
            console.log("Erreur lors de la recherche de l'image pour l'url : '" + urlToSearch + "'. Détails de l'erreur :");
            console.log(error);
        });
    };
    DataProviderOMDbService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpProviderService])
    ], DataProviderOMDbService);
    return DataProviderOMDbService;
}());
export { DataProviderOMDbService };
//# sourceMappingURL=data-provider-omdb.service.js.map