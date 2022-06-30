import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SpecificationsComponent } from './product-details/specifications/specifications.component';
import { RatingReviewsComponent } from './product-details/rating-reviews/rating-reviews.component';
import { QuestionsAnswersComponent } from './product-details/questions-answers/questions-answers.component';
import { EmployeesComponent } from './employees/employees.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'cart', component: CartComponent },
  {
    path: 'product-details/:id', component: ProductDetailsComponent, children:
      [
        { path: '', component: SpecificationsComponent },
        { path: 'specifications', component: SpecificationsComponent },
        { path: 'rating-reviews', component: RatingReviewsComponent },
        { path: 'questions-answers', component: QuestionsAnswersComponent },
      ]
  },
  { path: 'employees', component: EmployeesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
