import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { Book } from 'src/app/models/book';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
    books: Book[] = []

    constructor(public booksService: BooksService, private router: Router, public location: Location) { }

    ngOnInit() {
        this.getBooks();
    }

    getBooks() {
        this.booksService.getBooks().subscribe(
            data => {
                console.log(data)
                this.books = data;
            },
            error => console.log(error)
        )
    }
}
