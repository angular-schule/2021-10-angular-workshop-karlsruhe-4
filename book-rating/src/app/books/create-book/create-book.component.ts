import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent  {

  bookForm = new FormGroup({
    isbn: new FormControl('', [Validators.required, Validators.minLength(3)]),
    title: new FormControl('', Validators.required),
    description: new FormControl()
  });

  isInvalid(path: string): boolean {
    const control = this.bookForm.get(path);
    return control ? control.invalid && control.touched : true;
  }

  submitForm(): void {
    const newBook = {
      ...this.bookForm.value,
      rating: 1
    }

    /// HandsOn
    /// 1. Erzeuge ein Event mit dem Namen 'create'
    /// 2. Emittiere das Event
    /// 3. Subscribe dich auf das Event im Dashboard
    /// 4. Füge das Buch dem Array hinzu (Achtung: Immutability)


    this.bookForm.reset();

  }

}
