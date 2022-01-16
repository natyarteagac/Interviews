import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './components/book/book.component';
import { BooksService } from './services/books.service';
import { BookFormComponent } from './components/book-form/book-form.component';


@NgModule({
    declarations: [
        AppComponent,
        BookComponent,
        BookFormComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [
        BooksService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
