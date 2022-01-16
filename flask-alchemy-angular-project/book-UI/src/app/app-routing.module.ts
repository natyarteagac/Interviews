import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './components/book/book.component';
import { BookFormComponent } from './components/book-form/book-form.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/books',
        pathMatch: 'full',
    },
    {
        path: 'books',
        component: BookComponent
    },
    {
        path: 'books/add',
        component: BookFormComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
