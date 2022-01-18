import { Component, HostBinding, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/services/books.service';
import { BookListService } from 'src/app/services/book-list.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

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
    edit: boolean = false;

    constructor(private bookService: BooksService,
        private bookListService: BookListService,
        private route: Router,
        private activatedROute: ActivatedRoute) { }

    ngOnInit() {
        const params = this.activatedROute.snapshot.params;
        if (params.id) {
            this.book = this.bookListService.books.find(book => book.id === params.id);
            this.bookService.updateBook(this.book.id, this.book).subscribe(
                res => {
                    console.log(res);
                    this.edit = true;
                },
                err => console.log(err)
            )
        }
    }
    saveNewBook() {
        this.bookService.addBook(this.book).subscribe(() => {
            this.route.navigate(['/books']);
        }
        );
    }
    updateBook() {
        this.bookService.updateBook(this.book.id, this.book).subscribe(
            res => {
                console.log(res)
                this.route.navigate(['/books']);
            },
            err => console.log(err)
        )
    }
}
