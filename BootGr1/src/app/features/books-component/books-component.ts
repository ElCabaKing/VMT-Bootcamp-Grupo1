import { Component, inject, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { commonModule } from '@angular/common'; 
import { Books } from '../pages/books/books';
import { IBook } from '../interfaces/IBook';
import { signal } from '@angular/core';



@Component({
  selector: 'app-books-component',
  imports: [],
  templateUrl: './books-component.html',
  styleUrl: './books-component.scss',
})
export class BooksComponent implements OnInit {
  private _booksService = inject(BooksService)
  //generacion del modelo de datos para el componente
  books: IBook[] = [];
  //senal de carga para el html
  loading = signal(true);
  error = signal(false);

  ngOnInit() {
    this.GetBooks();
    console.log('elementos cargados');
  }


  GetBooks(){
    this._booksService.getAllBooks().subscribe({
      next: (libro_gen) => {
        this.books = libro_gen;
        this.loading.set(false);
      },
      error: () => {
        console.log("Error al obtener los libros");
        this.error.set(true);
        this.loading.set(false);
      }
    })
  }
}
