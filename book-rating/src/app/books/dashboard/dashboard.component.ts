import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { BookStoreService } from '../shared/book-store.service';
import { BooksService } from '../shared/http';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  // VORSICHT: Bug sobald wir AJAX einführen
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {

  books: Book[] = [];

  constructor(private br: BookRatingService,
    // private bs: BookStoreService
    private bs: BooksService) {
    this.bs.booksGet().subscribe(books => this.books = books)
  }

  doRateUp(book: Book): void {
    const ratedBook = this.br.rateUp(book);
    this.updateAndSortBooks(ratedBook);
  }

  doRateDown(book: Book): void {
    const ratedBook = this.br.rateDown(book);
    // const ratedBook = {
    //   ...book,
    //   rating: Math.max(book.rating - 1, 1)
    // }
    this.updateAndSortBooks(ratedBook);
  }

  updateAndSortBooks(ratedBook: Book): void {
    this.books = this.books
      .map(b => b.isbn === ratedBook.isbn ? ratedBook : b)
      .sort((a, b) => b.rating! - a.rating!)
  }

  addBook(newBook: Book) {
    this.books = [...this.books, newBook];
  }
}
