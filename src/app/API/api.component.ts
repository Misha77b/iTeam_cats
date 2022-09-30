import { Component, OnInit } from "@angular/core";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { IApi } from "./api";

@Injectable()

@Component({
    selector: 'app-api',
    templateUrl: './api.component.html'
})

export class ApiComponent {
    
    // cats: cats[];
    constructor(private http: HttpClient) {}

    private _apiUrl: string = 'https://api.thecatapi.com/v1/images/search';

    ngOnInit(): void {
        this.getApi
    }

    getApi(): Observable<IApi[]>{
      return this.http.get<IApi[]>(this._apiUrl)
    }

    showApi() {
        this.getApi()
          .subscribe(data => console.log(data))
    }
}