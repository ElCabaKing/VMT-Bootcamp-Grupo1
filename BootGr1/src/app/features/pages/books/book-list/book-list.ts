import { Component, inject, signal } from '@angular/core';
import { IBook } from '../../../interfaces/IBook';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { BooksService } from '../../../services/books-service/books-service';
import { Router } from '@angular/router';
import { BookForm } from '../book-form/book-form';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-book-list',
  imports: [MatButtonModule, MatCardModule, MatDividerModule,
    MatProgressSpinnerModule, MatIconModule,
    FormsModule, MatDialogModule],
  templateUrl: './book-list.html',
  styleUrl: './book-list.scss',
})
export class BookList {

  books = signal<IBook[]>([]);
  loading = signal(false);
  errorMessage = signal('');

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
        this.errorMessage.set('Error al cargar libros');
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
