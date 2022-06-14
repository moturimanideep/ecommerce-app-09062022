import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  banners: Array<any> = [
      {
          id: 1,
          imgSrc: 'https://img.freepik.com/free-vector/e-commerce-icon-robotic-hand-internet-shopping-online-purchase-add-cart_127544-586.jpg?w=2000',
          alternateText: 'Banner 1'
      },
      {
          id: 2,
          imgSrc: 'https://img.freepik.com/free-photo/omni-channel-technology-online-retail-business_31965-3010.jpg?w=2000',
          alternateText: 'Banner 2'
      },
      {
          id: 3,
          imgSrc: '',
          alternateText: 'Banner 3'
      }
  ];
  constructor() { }

  ngOnInit(): void {
    console.log(this.banners[1].imgSrc)
  }
  getBannerInfo(bannerInfo: any) {
    console.log(bannerInfo)
  }

}
