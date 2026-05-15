import { Component, inject, signal } from '@angular/core';
import { IBook } from '../../../interfaces/IBook';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { BooksService } from '../../../services/books-service/books-service';
import { Router } from '@angular/router';
import { BookForm } from '../book-form/book-form';


@Component({
  selector: 'app-book-list',
  imports: [],
  templateUrl: './book-list.html',
  styleUrl: './book-list.scss',
})
export class BookList {

  books = signal<IBook[]>([]);
  loading = signal(false);
  erroMessage = signal('');

  constructor( private bookService: BooksService, private dialogRef: MatDialog) {}

  private router = inject(Router);


  ngOnInit(): void {
    this.cargarLibros();
  }


  cargarLibros(): void {

    this.loading.set(true);

    this.bookService.getAllBooks().subscribe({

      next: (data: IBook[]) => {
        this.books.set(data);
        this.loading.set(false);
      },

      error: () => {
        this.erroMessage.set('Error al cargar los libros');
        this.loading.set(false);
      }

    });

  }

    goToBookDetails(Id: string): void {
    this.router.navigate(['/books', Id]);
  }

  abrirFormulario(book: IBook | null = null){
    const dialogRef = this.dialogRef.open(BookForm, {
      width: '480px',
      data: book
    })
  }
  }
