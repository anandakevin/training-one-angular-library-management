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
import {CreateTransactionComponent} from './pages/transaction/create-transaction/create-transaction.component';
import {SimilarBooksComponent} from './book/similar-books/similar-books.component';
import {BookDetailComponent} from './pages/book-detail/book-detail.component';
import {ConfirmPopupComponent} from './layout/confirm-popup/confirm-popup.component';
import {LoginComponent} from './pages/login/login.component';
import {ErrorPageComponent} from './pages/error-page/error-page.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {MdbAccordionModule} from 'mdb-angular-ui-kit/accordion';
import {MdbCarouselModule} from 'mdb-angular-ui-kit/carousel';
import {MdbCheckboxModule} from 'mdb-angular-ui-kit/checkbox';
import {MdbCollapseModule} from 'mdb-angular-ui-kit/collapse';
import {MdbDropdownModule} from 'mdb-angular-ui-kit/dropdown';
import {MdbFormsModule} from 'mdb-angular-ui-kit/forms';
import {MdbModalModule} from 'mdb-angular-ui-kit/modal';
import {MdbPopoverModule} from 'mdb-angular-ui-kit/popover';
import {MdbRadioModule} from 'mdb-angular-ui-kit/radio';
import {MdbRangeModule} from 'mdb-angular-ui-kit/range';
import {MdbRippleModule} from 'mdb-angular-ui-kit/ripple';
import {MdbScrollspyModule} from 'mdb-angular-ui-kit/scrollspy';
import {MdbTabsModule} from 'mdb-angular-ui-kit/tabs';
import {MdbTooltipModule} from 'mdb-angular-ui-kit/tooltip';
import {MdbValidationModule} from 'mdb-angular-ui-kit/validation';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedService} from "./service/shared.service";
import {NgxPermissionsModule, NgxPermissionsService} from "ngx-permissions";
import { BookFormComponent } from './pages/book-form/book-form.component';

@NgModule({
  declarations: [AppComponent,
    HeaderComponent, FooterComponent, BookCardSmallComponent, BookCardLongHorizontalComponent, UsersPageComponent, CategoriesPageComponent, ManageComponent, ProfileComponent, DashboardComponent, TransactionComponent, TransactionCardComponent, CreateTransactionComponent, SimilarBooksComponent, BookDetailComponent, ConfirmPopupComponent, LoginComponent, ErrorPageComponent, BookFormComponent],
  imports: [BrowserModule,
    AppRoutingModule, HttpClientModule, FormsModule, MdbAccordionModule, MdbCarouselModule, MdbCheckboxModule, MdbCollapseModule, MdbDropdownModule, MdbFormsModule, MdbModalModule, MdbPopoverModule, MdbRadioModule, MdbRangeModule, MdbRippleModule, MdbScrollspyModule, MdbTabsModule, MdbTooltipModule, MdbValidationModule, BrowserAnimationsModule, NgxPermissionsModule.forRoot()],
  providers: [NgxPermissionsService],
  bootstrap: [AppComponent, SharedService],
})
export class AppModule {
}
