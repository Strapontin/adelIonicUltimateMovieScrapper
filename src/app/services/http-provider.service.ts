import { Platform } from '@ionic/angular';
import { HTTP, HTTPResponse } from '@ionic-native/http/ngx';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpProviderService {

  private isNative: boolean;
  constructor(private ptl: Platform, private angHttp: HttpClient, private nativeHttp: HTTP) {
    this.isNative = ptl.is('android') || ptl.is('ios') ? true : false;
  }

  get(url: string, params: { [key: string]: string }, headers: { [key: string]: string }): Promise<HTTPResponse> {
    if (this.isNative) {
      return this.nativeHttp.get(url, params, headers);
    } else {

      return this.angHttp.get<Object>(url, {
        params,
        headers,
        observe: 'response'
      }).toPromise().then((result: HttpResponse<Object>) => {

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
  }
}