import { Component, inject, OnInit, signal } from '@angular/core';
import { AuthorsService } from '../../../services/authors-service';
import { IAuthor } from '../../../interfaces/IAuthor';
<<<<<<< HEAD
import { AuthorForm } from '../author-form/author-form';
import { MatDialog } from '@angular/material/dialog';
=======
import { MatDialog } from '@angular/material/dialog';
import { ConfirmElimination } from '../confirm-elimination/confirm-elimination';
>>>>>>> 82daa8d80aa8b20f9a5355a9e24fdc41e4c9d8db

@Component({
  selector: 'app-authors',
  imports: [],
  templateUrl: './authors.html',
  styleUrl: './authors.scss',
})

export class Authors implements OnInit {
  private readonly authorService = inject(AuthorsService);
  public authorList= signal<IAuthor[]>([]);

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    this.authorService.getAll().subscribe((authors) => {
      this.authorList.set(authors);
    });
  }

<<<<<<< HEAD
  abrirFormulario(author: IAuthor | null = null){
    const dialogRef = this.dialog.open(AuthorForm, {
      width: '480px',
      data: author
    })
  }

=======
  dialog = inject(MatDialog);
  
  confirmDelete() {
    const dialogRef = this.dialog.open(ConfirmElimination, {
      data: null
    });
  }
>>>>>>> 82daa8d80aa8b20f9a5355a9e24fdc41e4c9d8db
}
