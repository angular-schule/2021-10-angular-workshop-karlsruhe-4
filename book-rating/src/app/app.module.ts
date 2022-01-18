import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksModule } from './books/books.module';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { BookComponent } from './books/book/book.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiModule, Configuration } from './books/shared/http';

@NgModule({
  declarations: [
    AppComponent,
    // DashboardComponent,
    // BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BooksModule,
    HttpClientModule,
    ApiModule.forRoot(() => new Configuration({
      basePath: 'https://api.angular.schule'
      }))
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
