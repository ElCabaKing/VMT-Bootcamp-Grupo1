import { Component, inject, OnInit, signal } from '@angular/core';
import { AuthorsService } from '../../../services/authors-service';
import { IAuthor } from '../../../interfaces/IAuthor';

@Component({
  selector: 'app-authors',
  imports: [],
  templateUrl: './authors.html',
  styleUrl: './authors.scss',
})
export class Authors implements OnInit {
  private readonly authorService = inject(AuthorsService);
  public authorList= signal<IAuthor[]>([]);

  ngOnInit() {
    this.authorService.getAll().subscribe((authors) => {
      this.authorList.set(authors);
    });
  }
}
