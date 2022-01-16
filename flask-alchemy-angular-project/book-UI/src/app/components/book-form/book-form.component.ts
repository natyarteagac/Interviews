
import { Component, HostBinding, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/services/books.service';


@Component({
    selector: 'app-book-form',
    templateUrl: './book-form.component.html',
    styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
    @HostBinding('class') classes = 'row';

    book: Book = {
        id: "",
        title: "",
        author: "",
        read: false,
    }

    constructor(private bookService: BooksService) { }

    ngOnInit() {
    }

    saveNewBook() {
        this.bookService.addBook(this.book).subscribe(
            res => {
                console.log(res);
                this.ngOnInit();
            },
            error => console.log(error)
        )
    }
}