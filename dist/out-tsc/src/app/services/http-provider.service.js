var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Platform } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
var HttpProviderService = /** @class */ (function () {
    function HttpProviderService(ptl, angHttp, nativeHttp) {
        this.ptl = ptl;
        this.angHttp = angHttp;
        this.nativeHttp = nativeHttp;
        this.isNative = ptl.is('android') || ptl.is('ios') ? true : false;
    }
    HttpProviderService.prototype.get = function (url, params, headers) {
        if (this.isNative) {
            return this.nativeHttp.get(url, params, headers);
        }
        else {
            return this.angHttp.get(url, {
                params: params,
                headers: headers,
                observe: 'response'
            }).toPromise().then(function (result) {
                // console.log("Result http : ");
                // console.log(result);
                return {
                    data: result.body,
                    error: result.status !== 200 ? result.statusText : null,
                    headers: result.headers,
                    status: result.status,
                    url: result.url
                };
            });
        }
    };
    HttpProviderService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [Platform, HttpClient, HTTP])
    ], HttpProviderService);
    return HttpProviderService;
}());
export { HttpProviderService };
//# sourceMappingURL=http-provider.service.js.map