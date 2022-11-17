import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FooterComponent} from './layout/footer/footer.component';
import {HeaderComponent} from './layout/header/header.component';
import {BookCardSmallComponent} from './book/book-card-small/book-card-small.component';
import {BookCardLongHorizontalComponent} from './book/book-card-long-horizontal/book-card-long-horizontal.component';
import {UsersPageComponent} from './pages/manage/users-page/users-page.component';
import {CategoriesPageComponent} from './pages/manage/categories-page/categories-page.component';
import {ManageComponent} from './pages/manage/manage.component';
import {ProfileComponent} from './pages/profile/profile.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {TransactionComponent} from './pages/transaction/transaction.component';
import {TransactionCardComponent} from './pages/transaction/transaction-card/transaction-card.component';
import { CreateTransactionComponent } from './pages/transaction/create-transaction/create-transaction.component';
import { SimilarBooksComponent } from './book/similar-books/similar-books.component';
import { BookDetailComponent } from './pages/book-detail/book-detail.component';
import { ConfirmPopupComponent } from './layout/confirm-popup/confirm-popup.component';
import { LoginComponent } from './pages/login/login.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, BookCardSmallComponent, BookCardLongHorizontalComponent, UsersPageComponent, CategoriesPageComponent, ManageComponent, ProfileComponent, DashboardComponent, TransactionComponent, TransactionCardComponent, CreateTransactionComponent, SimilarBooksComponent, BookDetailComponent, ConfirmPopupComponent, LoginComponent, ErrorPageComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
