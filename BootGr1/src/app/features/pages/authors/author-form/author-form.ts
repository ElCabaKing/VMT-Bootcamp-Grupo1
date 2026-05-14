import { Component, inject, signal } from '@angular/core';
import { AuthorsService } from '../../../services/authors-service';
import { IAuthor } from '../../../interfaces/IAuthor';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-author-form',
  imports: [ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule],
  templateUrl: './author-form.html',
  styleUrl: './author-form.scss',
})
export class AuthorForm {

  ngOnInit() {
    if(this.author){
      this.isEdit.set(true);
      this.form.patchValue(this.author)
    }
  }

  private authorService = inject(AuthorsService)

  loading = signal(false);
  isEdit = signal<boolean | null>(null);
  error = signal<string | null>(null);
  author: IAuthor | null = inject(MAT_DIALOG_DATA)

  constructor(private router: Router) {}

  form = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    country: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    phoneNumber: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),
  });

  guardar() {
    if(this.form.invalid) return;

    const payload: Partial<IAuthor> =
      this.form.getRawValue();

    const accion = this.isEdit()
      ? this.authorService.update(this.author!.id, payload)
      : this.authorService.create(payload);

    accion.subscribe({
      next: () => this.router.navigate(['/authors'])
    });
  }

}
