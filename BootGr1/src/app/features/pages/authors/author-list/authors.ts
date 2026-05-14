import { Component, inject, OnInit, signal } from '@angular/core';
import { AuthorsService } from '../../../services/authors-service';
import { IAuthor } from '../../../interfaces/IAuthor';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmElimination } from '../confirm-elimination/confirm-elimination';

@Component({
  selector: 'app-authors',
  imports: [],
  templateUrl: './authors.html',
  styleUrl: './authors.scss',
})

export class Authors implements OnInit {
  private readonly authorService = inject(AuthorsService);
  public authorList = signal<IAuthor[]>([]);

  ngOnInit() {
    this.authorService.getAll().subscribe((authors) => {
      this.authorList.set(authors);
    });
  }

  dialog = inject(MatDialog);

  confirmDelete() {
    const dialogRef = this.dialog.open(ConfirmElimination, {
      data: null
    });

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
}
