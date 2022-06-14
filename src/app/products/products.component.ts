import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Array<any> = [
    {
      imgSrc: 'https://rukminim1.flixcart.com/image/312/312/kyeqjrk0/mobile/u/0/8/-original-imagan9qhw9nyhce.jpeg?q=70',
      name: 'REDMI Note 10S (Cosmic Purple, 64 GB)',
      price: 12999,
      specifications: ['6 GB RAM | 64 GB ROM | Expandable Upto 512 GB', '16.33 cm (6.43 inch) Full HD+ Super AMOLED Display',
        '64MP + 8MP + 2MP + 2MP | 13MP Front Camera', '5000 mAh Lithium-Ploymer Battery', 'Mediatek Helio G95 Processor'
      ],
      avgRating: 4.4,
      ratings: 41979,
      reviews: 2873,
      inStock: true,
    },
    {
      imgSrc: 'https://rukminim1.flixcart.com/image/312/312/ku4ezrk0/mobile/p/e/4/c31-mzb0a0jin-poco-original-imag7bzqxgdhgf2n.jpeg?q=70',
      name: 'POCO C31 (Royal Blue, 64 GB)',
      price: 8499,
      specifications: ['6 GB RAM | 64 GB ROM | Expandable Upto 512 GB', '16.33 cm (6.43 inch) Full HD+ Super AMOLED Display',
        '64MP + 8MP + 2MP + 2MP | 13MP Front Camera', '5000 mAh Lithium-Ploymer Battery', 'Mediatek Helio G95 Processor'
      ],
      avgRating: 4.4,
      ratings: 41979,
      reviews: 2873,
      inStock: false,
    },
    {
      imgSrc: 'https://rukminim1.flixcart.com/image/312/312/l0jwbrk0/mobile/a/p/r/-original-imagcb64gwkhzdk5.jpeg?q=70',
      name: 'realme 9 5G (Stargaze White, 64 GB)',
      price: 15499,
      specifications: ['6 GB RAM | 64 GB ROM | Expandable Upto 512 GB', '16.33 cm (6.43 inch) Full HD+ Super AMOLED Display',
        '64MP + 8MP + 2MP + 2MP | 13MP Front Camera', '5000 mAh Lithium-Ploymer Battery', 'Mediatek Helio G95 Processor'
      ],
      avgRating: 4.4,
      ratings: 41979,
      reviews: 2873,
      inStock: true,
    },
    {
      imgSrc: 'https://rukminim1.flixcart.com/image/312/312/ku04o7k0/mobile/x/x/t/9i-sport-mzb0a10in-redmi-original-imag785rwf3q8sft.jpeg?q=70',
      name: 'REDMI 9i Sport (Metallic Blue, 64 GB)',
      price: 8799,
      specifications: ['6 GB RAM | 64 GB ROM | Expandable Upto 512 GB', '16.33 cm (6.43 inch) Full HD+ Super AMOLED Display',
        '64MP + 8MP + 2MP + 2MP | 13MP Front Camera', '5000 mAh Lithium-Ploymer Battery', 'Mediatek Helio G95 Processor'
      ],
      avgRating: 4.4,
      ratings: 41979,
      reviews: 2873,
      inStock: true,
    },
    {
      imgSrc: 'https://rukminim1.flixcart.com/image/312/312/kqqykcw0/mobile/p/y/u/galaxy-f22-sm-e225fzkhins-samsung-original-imag4z99fagskjxd.jpeg?q=70',
      name: 'SAMSUNG Galaxy F22 (Denim Black, 128 GB)',
      price: 12499,
      specifications: ['6 GB RAM | 64 GB ROM | Expandable Upto 512 GB', '16.33 cm (6.43 inch) Full HD+ Super AMOLED Display',
        '64MP + 8MP + 2MP + 2MP | 13MP Front Camera', '5000 mAh Lithium-Ploymer Battery', 'Mediatek Helio G95 Processor'
      ],
      avgRating: 4.4,
      ratings: 41979,
      reviews: 2873,
      inStock: false
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
