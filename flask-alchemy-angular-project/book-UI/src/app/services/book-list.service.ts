import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { BooksService } from './books.service';

@Injectable({
    providedIn: 'root'
})
export class BookListService {
    books = []


    constructor(private booksService: BooksService) { }

    getBooks() {
        this.booksService.getBooks().subscribe(
            data => {
                this.books = data;
                console.log(data)
            }
        )
        console.log(this.books);
    }
}
