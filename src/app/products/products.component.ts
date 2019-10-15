import { Component, OnInit, ContentChild, ViewChild, Input } from '@angular/core';
import { ProductsServiceService } from '../products-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  allProducts = [];
  selectedItem;
  toCartFromProduct;
  isModalWindow = false;
  @ViewChild('userForm', { static: true }) userForm;
  cartLength: number;
  filter: any[];
  whileFilter: boolean;
  card = {} = [];
  cvv = this.productsService.cardDetailes.pop();

  constructor(private productsService: ProductsServiceService) { }

  ngOnInit() {
    // Printing all the images
    this.allProducts = this.productsService.products;
    this.whileFilter = false;
  }

  /* Sorting based on size */
  selectedElement(selectedData) {
    if (selectedData.value === 'lowtohigh') {
      console.log(selectedData.value);
      this.onChange();
    } else if (selectedData.value === 'hightolow') {
      console.log(selectedData.value);
      this.onChangeItem();
    }
  }
  onChangeItem() {
    console.log(this.selectedItem);
    this.allProducts.sort((a, b) => (+a.cost < +b.cost) ? 1 : -1);
    // this.filter.sort((a, b) => (+a.cost < +b.cost) ? 1 : -1);

  }
  onChange() {
    console.log(this.selectedItem);
    // this.filter.sort((a, b) => (+a.cost > +b.cost) ? 1 : -1);
    this.allProducts.sort((a, b) => (+a.cost > +b.cost) ? 1 : -1);
  }
  sortBySmallSize() {
    this.filter = this.allProducts.filter((item) => item.size === 36).sort((a, b) => (a.cost > b.cost) ? 1 : -1);
    this.whileFilter = true;
  }
  sortByMediumSize() {
    this.filter = this.allProducts.filter((item) => item.size === 38).sort((a, b) => (a.cost > b.cost) ? 1 : -1);
    this.whileFilter = true;
  }
  sortByLargeSize() {
    this.filter = this.allProducts.filter((item) => item.size === 40).sort((a, b) => (a.cost > b.cost) ? 1 : -1);
    this.whileFilter = true;
  }
  sortByExtraLargeSize() {
    this.filter = this.allProducts.filter((item) => item.size === 42).sort((a, b) => (a.cost > b.cost) ? 1 : -1);
    this.whileFilter = true;
  }

  /* Storing the cart items */

  toCart(data) {
    console.log('the data need to send', this.toCartFromProduct);
    this.productsService.postChapters(data);
    this.cartLength = this.productsService.cartedItems.length;
  }

  /* for modal window */

  onModalClose(isModal) {
    this.isModalWindow = isModal;
  }
  onModalToggle() {
    this.isModalWindow = !this.isModalWindow;
  }

  /* for payment */

  onEnterCardDetailes(data) {
    if (data.value.cvv === this.cvv.cvv) {
      confirm('Order successfull');
    } else {
    confirm('Enter valid cvv');
  }
  }

  /* for payment modal window */

  forButProduct() {
    this.isModalWindow = true;
  }
}
