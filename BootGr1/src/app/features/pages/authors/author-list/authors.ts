import { Component, inject, OnInit, signal } from '@angular/core';
import { AuthorsService } from '../../../services/authors-service';
import { IAuthor } from '../../../interfaces/IAuthor';
import { AuthorForm } from '../author-form/author-form';
import { MatDialog } from '@angular/material/dialog';
<<<<<<< HEAD
=======
import { ConfirmElimination } from '../confirm-elimination/confirm-elimination';
>>>>>>> d7dae27475391cd2f61c56f824826a01cf4af2b4

@Component({
  selector: 'app-authors',
  imports: [],
  templateUrl: './authors.html',
  styleUrl: './authors.scss',
})

export class Authors implements OnInit {
  private readonly authorService = inject(AuthorsService);
  public authorList = signal<IAuthor[]>([]);

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    this.authorService.getAll().subscribe((authors) => {
      this.authorList.set(authors);
    });
  }

  abrirFormulario(author: IAuthor | null = null){
    const dialogRef = this.dialog.open(AuthorForm, {
      width: '480px',
      data: author
    })
  }
<<<<<<< HEAD
=======

=======
  dialog = inject(MatDialog);

  confirmDelete() {
    const dialogRef = this.dialog.open(ConfirmElimination, {
      data: null
    });
<<<<<<< HEAD

    dialogRef.afterClosed().subscribe(result => {
      if (result?.delete) {
        this.authorService.delete('id').subscribe(() => {
          // Aquí puedes actualizar la lista de autores después de eliminar uno
          this.authorService.getAll().subscribe((authors) => {
            this.authorList.set(authors);
          });
        });
      }
    });
}
=======
  }
>>>>>>> 82daa8d80aa8b20f9a5355a9e24fdc41e4c9d8db
>>>>>>> af1d2ad9a17f6b8c5b84ef1d85c19879f884e12a
>>>>>>> d7dae27475391cd2f61c56f824826a01cf4af2b4
}
