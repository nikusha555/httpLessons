import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class myHttpService {
  public baseUrl: string = 'https://dummyjson.com/';
 

  constructor(private HttpClient: HttpClient) {


  }

  public get(path: string): Observable<any> {
    return this.HttpClient.get(this.baseUrl + path)
  };

  async post(path: string, pParams: FormData | string, pHeaders: HttpHeaders) {
    const response = await fetch(this.baseUrl + path, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },

      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: "Body"


    }


    )




    return this.HttpClient.post(this.baseUrl + path, pParams, {
      headers: pHeaders,
      responseType: 'json'
    });



    function urlParser() {
      let hash = window.location.hash.substring(1);
      return hash.split('&').reduce(function (result: any, item) {
        var parts = item.split('=');
        result[parts[0]] = parts[1];
        return result;
      }, {});


    }
  }



}

