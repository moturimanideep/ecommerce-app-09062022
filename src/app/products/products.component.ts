import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedService } from '../shared.service';
import { RestService } from '../rest.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  inputString: any = '';
  products: Array<any> = [];
  constructor(
    private router: Router,
    private sharedService: SharedService,
    private restService: RestService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.restService.getProducts().subscribe((res: any) => {
      this.products = res.data;
    }, (err) => {

    });
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
  addToCart(product: any) {
    const cartProducts = this.sharedService.getCartProducts();
    const isExist = cartProducts.find((prod: any) => prod.name === product.name);
    if (isExist) {
      window.alert('Product already exist in the cart');
    } else {
      cartProducts.push({...product, quantity: 1});
      this.sharedService.setCartProducts(cartProducts);
      this.router.navigate(['/cart']);
    }
  }
  navToProductDetails(id: string) {
    this.router.navigate([`/product-details/${id}`], {queryParams: {id: 1, previousPage: 'products'}})
  }
  addProduct() {
    console.log('aa')
    this.products.push(
      {
        imgSrc: 'https://rukminim1.flixcart.com/image/312/312/l2p23rk0/mobile/s/4/3/-original-imagdznhcbdfwfud.jpeg?q=70',
        name: 'OPPO K10 5G (Ocean Blue, 128 GB)',
        price: 14499,
        specifications: ['6 GB RAM | 64 GB ROM | Expandable Upto 512 GB', '16.33 cm (6.43 inch) Full HD+ Super AMOLED Display',
          '64MP + 8MP + 2MP + 2MP | 13MP Front Camera', '5000 mAh Lithium-Ploymer Battery', 'Mediatek Helio G95 Processor'
        ],
        avgRating: 4.4,
        ratings: 41979,
        reviews: 2873,
        inStock: false
      }
    )
    console.log(this.products);
  }
}
