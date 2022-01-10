import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BooksService {

    private BASE_URL = 'http://localhost:5000/';

    constructor(private http: HttpClient) { }

    getBooks(): Observable<any> {
        return this.http.get(`${this.BASE_URL}`);
    };
}
