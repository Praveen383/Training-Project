import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from '../products-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  isModalWindow: boolean;
  isModalClosed: any;
  allProducts: any;
  editItem = [];
  isAddModalWindow: boolean;
  newImage;
  imgUrl;
  isedit = true;
  isAdd = false;
  edit: boolean;
  index: any;
  onAdded: boolean;
  whileFilter: boolean;
  filter = [];
  selectedItem;

  constructor(private productsService: ProductsServiceService) { }

  ngOnInit() {
    this.allProducts = this.productsService.products;
    console.log(this.editItem);
    this.whileFilter = false;
  }

 /* filter based on size */
  selectedElement(selectedData) {
    if (selectedData.value === 'lowtohigh') {
      console.log(selectedData.value);
      console.log(this.allProducts.sort((a, b) => (+a.cost > +b.cost) ? 1 : -1));
    } else if (selectedData.value === 'hightolow') {
      console.log(selectedData.value);
      console.log(this.allProducts.sort((a, b) => (+a.cost < +b.cost) ? 1 : -1));
    }
  }

sortBySmallSize(data) {
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

  onModalClose(isModal) {
    this.isModalWindow = isModal;
  }

  /* on admin edit the product */
  onEdit(data, ind) {
    this.index = ind;
    this.editItem = [];
    this.isModalWindow = !this.isModalWindow;
    this.edit = false;
    this.onAdded = false;
    console.log('edit data', data);
    this.editItem.splice(ind, 1, data);
    console.log(this.editItem);
  }

  //  onReplace(data, ind) {
  //   this.allProducts = this.editItem.splice(ind, 1, data);
  //   console.log(this.allProducts);
  // }

  /* on admin edit the product */
  onAdd() {
    this.isModalWindow = true;
    this.edit = true;
    this.onAdded = true;
    this.editItem = [];
    this.editItem.push({ img: '', name: '', cost: '', color: '', size: '' });
  }

  onAddModalToggle() {
    this.isAddModalWindow = !this.isAddModalWindow;
  }
  onAddClose() {
    this.isModalWindow = !this.isModalWindow;
  }

  /* on admin edit the product */
  onAdminProductSubmit(data) {
    data.value.img = this.imgUrl;
    console.log('edit detailes', data.value);
    if (this.edit === true) {
      this.productsService.products.push(data.value);
      console.log('new product data', this.productsService.products);
    } else {
      data.value.img = this.imgUrl;
      this.allProducts.splice(this.index, 1, data.value);
      console.log('*********' , this.allProducts);
      console.log('new product data', this.productsService.products);
    }
  }

  /* on admin delete the product */
  deleteItem(data, ind) {
    console.log('delete data', data, ind);
    this.allProducts.splice(ind, 1);
  }

  /* to get image address  */
  onImgChange(data) {
    console.log('on img change', data);
    console.log('ngModel data', this.newImage);
    if (data.target.files && data.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        this.imgUrl = event.target.result;
        console.log('img path', this.imgUrl);  // image path
};
      reader.readAsDataURL(data.target.files[0]);
    }
  }
  onClose() {
    this.isModalWindow = !this.isModalWindow;
  }
}
