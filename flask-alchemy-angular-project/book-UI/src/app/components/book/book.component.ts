import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { Book } from 'src/app/models/book';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { BookListService } from 'src/app/services/book-list.service';

@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
    books: Book[] = [];

    constructor(public booksService: BooksService, public bookListService: BookListService) { }

    ngOnInit() {
        this.bookListService.getBooks();
        this.getBooks();
    }

    getBooks() {
        this.booksService.getBooks().subscribe(
            res => {
                this.books = res
            },
            error => console.log(error)
        )
    }

    deleteBook(id: string) {
        this.booksService.deleteBook(id).subscribe(
            res => {
                console.log(res)
                this.getBooks()
            },
            error => console.log(error)
        )
    }
}
