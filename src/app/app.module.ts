import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SpecificationsComponent } from './product-details/specifications/specifications.component';
import { RatingReviewsComponent } from './product-details/rating-reviews/rating-reviews.component';
import { QuestionsAnswersComponent } from './product-details/questions-answers/questions-answers.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchFilterPipe } from './search-filter.pipe';

@NgModule({
  declarations: [
    SearchFilterPipe,
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    ProductsComponent,
    UsersComponent,
    CartComponent,
    ProductDetailsComponent,
    SpecificationsComponent,
    RatingReviewsComponent,
    QuestionsAnswersComponent,
    EmployeesComponent,
    EmployeeDetailsComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
