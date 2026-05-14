import { Component, inject, OnInit, signal } from '@angular/core';
import { AuthorsService } from '../../../services/authors-service';
import { IAuthor } from '../../../interfaces/IAuthor';
import { AuthorForm } from '../author-form/author-form';
import { MatDialog } from '@angular/material/dialog';

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

  abrirFormulario(author: IAuthor | null = null){
    const dialogRef = this.dialog.open(AuthorForm, {
      width: '480px',
      data: author
    })
  }
}
