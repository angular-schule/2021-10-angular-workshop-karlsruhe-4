import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../shared/book';


@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent  {

  // book: Book | undefined = undefined;
  @Input()
  book?: Book;

  @Output()
  rateUp = new EventEmitter<Book>();

  @Output()
  rateDown = new EventEmitter<Book>();

  doRateUp() {
    this.rateUp.emit(this.book);
    debugger
  }

  doRateDown() {
    this.rateDown.emit(this.book);
    debugger
  }

  get stars(): undefined[] {
    return new Array(this.book?.rating);
  }

}
