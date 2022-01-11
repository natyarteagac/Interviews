import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book';


@Injectable({
    providedIn: 'root'
})
export class BooksService {

    BASE_URL = 'http://localhost:5000/';
    constructor(private http: HttpClient) { }

    getBooks(): Observable<any> {
        return this.http.get(`${this.BASE_URL}`);
    }
}
