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

    constructor(public booksService: BooksService) { }

    ngOnInit(): void {
        this.booksService.getBooks().subscribe(data => {
            console.log(data)
            this.books = data.data;
        },
            error => console.log(error))
    }
}
