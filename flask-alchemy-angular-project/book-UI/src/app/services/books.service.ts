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
    addBook(book: Book) {
        return this.http.post(`${this.BASE_URL}/new`, book);
    }
    deleteBook(id: string) {
        return this.http.delete(`${this.BASE_URL}/${id}`);
    }
    updateBook(id: string, updatedBook: Book): Observable<any> {
        return this.http.put(`${this.BASE_URL}/${id}`, updatedBook);
    }
}
