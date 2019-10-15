import { Component, OnInit} from '@angular/core';
import { ProductsServiceService } from '../products-service.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {
  Items = [];
  amount;
  isModalWindow: any;
  dubliLen: any;
  keysArr = [] ;
  btnDisable: boolean;
  cvv: number;
  constructor(private productService: ProductsServiceService) { }

  ngOnInit() {
    /* Selected cart items from service */
    this.Items = this.productService.cartedItems;
    this.amount = this.Items.reduce((v, a) => v + a.cost * a.quantity, 0);
    if (this.Items.length >= 1) {
      this.btnDisable = true;
    }
  }

  /* delete carted item based on index */
  deleteItem(data, ind) {
    console.log('delete data', data, ind);
    console.log('splice item', this.Items.splice(ind, 1));
    this.amount = this.Items.reduce((v, a) => v + a.cost * a.quantity, 0);
  }

  onModalClose(isModal) {
    this.isModalWindow = isModal;
  }

  forButProduct() {
    this.isModalWindow = !this.isModalWindow;
  }

  /* card details */
 onEnterCard(data) {
   console.log( 'order SuccessFully' );
 }
}
