import { Injectable, OnInit, OnChanges } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, BehaviorSubject, Subject, from, timer } from 'rxjs';
import { ImgDetails } from './img-detail.model';
import { Source } from 'webpack-sources';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {
  public cartedItems = [];
  userName;

  cardDetailes = [{
    bankname: 'SBI',
    ExpDate: 112020,
    cardnumber: 123456789090,
    cvv: 123
  }];

  products = [
    {
      // tslint:disable-next-line: max-line-length
      img: 'https://rukminim1.flixcart.com/image/880/1056/jamtevk0/t-shirt/9/u/t/l-tgyrdvnfulganeshd3-tripr-original-imafy3ynzsvtbcva.jpeg?q=50',
      name: 'Printed Men V-Neck Multicolor T-Shirt',
      cost: 330,
      size: 38,
      color: 'Gray',
      ID: 1,
      quantity: 1
    },

    {
      // tslint:disable-next-line: max-line-length
      img: 'https://rukminim1.flixcart.com/image/880/1056/jb890nk0/t-shirt/k/r/h/l-tblgyvnfuld2ganesh-tripr-original-imafymqhgrvazayx.jpeg?q=50',
      name: 'Printed Men V-Neck Multicolor T-Shirt',
      cost: 349,
      size: 36,
      color: 'Black',
      ID: 2,
      quantity: 1
    },

    {
      img: 'https://images-na.ssl-images-amazon.com/images/I/81P4WDLw6GL._UL1500_.jpg',
      name: 'Full Sleeve Solid Men Sweatshirt',
      cost: 509,
      size: 38,
      color: 'Brown',
      ID: 3,
      quantity: 1
    },

    {
      // tslint:disable-next-line: max-line-length
      img: 'https://rukminim1.flixcart.com/image/880/1056/jzd0qkw0/t-shirt/u/2/x/m-ke-hoodie-full-black-2119-s-rebound-original-imafh7jpxtpzyudj.jpeg?q=50',
      name: 'Solid Men Hooded Neck Black T-Shirt',
      cost: 399,
      size: 40,
      color: 'Black',
      ID: 4,
      quantity: 1
    },

    {
      img: 'https://rukminim1.flixcart.com/image/880/1056/jc299jk0/t-shirt/p/r/g/l-fullgrey-546-lime-original-imaffa4ee4nmugxq.jpeg?q=50',
      name: 'Graphic Print Men Round  Grey T-Shirt',
      cost: 449,
      size: 42,
      color: 'Blue',
      ID: 5,
      quantity: 1
    },
    {
      // tslint:disable-next-line: max-line-length
      img: 'https://rukminim1.flixcart.com/image/880/1056/jacket/h/e/p/aw16-hvar-m-pln-budn-campus-sutra-l-original-imaekgvgjbjgdgfg.jpeg?q=50',
      name : 'Full Sleeve Solid Men Jacket',
      cost: 499,
      size: 38,
      color: 'Black',
      ID: 6,
      quantity: 1
    },

    {
      img: 'https://images-na.ssl-images-amazon.com/images/I/81rTtLggSBL._UL1500_.jpg',
      name: 'Men Self Design Formal t-Shirt',
      cost: 549,
      size: 36,
      color: 'blue',
      ID: 7,
      quantity: 1
    },

    {
      // tslint:disable-next-line: max-line-length
      img: 'https://rukminim1.flixcart.com/image/880/1056/jwwffrk0/sweatshirt/8/e/f/s-tblsweatchecker1-tripr-original-imafhge8kkzfbrpz.jpeg?q=50',
      name: '   Sleeve Checkered Men Sweatshirt',
      cost: 520,
      size: 42,
      color: 'Blue',
      ID: 8,
      quantity: 1
    }
  ];
  cartedItemsCopy: any[] = [];
  nextItemAdd = 0;
  assetsData: any;
  constructor(private httpClient: HttpClient) {
    // let source = from('wef');
    // let a = Source.map((res) => res);
   }

  private subject = new BehaviorSubject<any>('');
  postData(data) {
    this.subject.next(data);
  }
  getMessage() {
    return this.httpClient.get('../../..../../assets/mock/scripting.ts', {
      responseType : 'json'
  }).pipe(map((res: any) => res));
  }
 
  
  postChapters(data: any) {
    //  [...this.cartedItems];
    // let headers  = new HttpHeaders();
    // headers.append('Content-Type','application/json');
      console.log(this.assetsData);
    let duplicate = false;
    for (let i = 0; i < this.cartedItems.length; i++) {
      if (this.cartedItems[i].ID === data.ID) {
        duplicate = true;
        // idNumber = data.ID;
        break;
      }
    }

    if (!duplicate) {
      this.cartedItems.push(data);
    } else {
      const cost = 0;
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.cartedItems.length; i++) {
        if (this.cartedItems[i].ID === data.ID) {
          this.cartedItems[i].quantity = this.cartedItems[i].quantity + 1;
        }
      }
    }
  }
}
