import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts: any = [];
  constructor(
    private sharedService: SharedService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cartProducts = this.sharedService.getCartProducts();
  }
  getColor(name: string) {
    if (name.includes('REDMI')) {
      return 'red';
    } else if (name.includes('POCO')) {
      return 'violet';
    } else if (name.includes('realme')) {
      return 'green';
    } else {
      return 'blue';
    }
  }
  navToProductDetails(name: string) {
    this.router.navigate([`/product-details/${name}`], {queryParams: {id: 1, previousPage: 'products'}})
  }

}
