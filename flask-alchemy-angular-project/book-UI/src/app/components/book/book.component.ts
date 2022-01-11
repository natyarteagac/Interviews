import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { Book } from 'src/app/models/book';

@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
    books: Book[] = []

    constructor(public bookService: BooksService) { }

    ngOnInit() {
        this.bookService.getBooks().subscribe(
            data => {
                console.log(data)
                this.books = data;
            },
            error => console.log(error)
        )
    }
}