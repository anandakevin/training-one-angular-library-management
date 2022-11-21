import {NgModule} from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {ErrorPageComponent} from "./pages/error-page/error-page.component";
import {BookDetailComponent} from "./pages/book-detail/book-detail.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {TransactionComponent} from "./pages/transaction/transaction.component";
import {CreateTransactionComponent} from "./pages/transaction/create-transaction/create-transaction.component";
import {CategoriesPageComponent} from "./pages/manage/categories-page/categories-page.component";
import {UsersPageComponent} from "./pages/manage/users-page/users-page.component";
import {ManageComponent} from "./pages/manage/manage.component";
import {Title} from "@angular/platform-browser";
import {SharedService} from "./service/shared.service";

const sharedService: SharedService = new SharedService();

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: 'home', component: DashboardComponent, data: {
      permission: {
        only: ['admin', 'user'],
        redirectTo: '/login'
      }
    }
  },
  {path: 'book/:id', component: BookDetailComponent},
  {path: 'profile', component: ProfileComponent},
  {
    path: 'admin',
    // data: {
      // permission: {
      //   only: ['admin'],
      //   redirectTo: ''
      // }
    // },
    children: [{
      path: 'transaction', component: TransactionComponent, children: [
        {path: 'create', component: CreateTransactionComponent}
      ]
    },
      {path: 'manage', component: ManageComponent},
    ]
  },
  {path: 'error', component: ErrorPageComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  constructor(private titleService: Title) {


  }
}
