import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsServiceService } from 'src/app/products-service.service';

@Component({
  selector: 'app-registor',
  templateUrl: './registor.component.html',
  styleUrls: ['./registor.component.css']
})
export class RegistorComponent implements OnInit {
  observe: any;

  constructor(private router: Router, private productService: ProductsServiceService) { }

  ngOnInit() {
    this.productService.getMessage().subscribe((res) => {
      this.observe = res;
    });
  }
  onUserFormSubmit(data) {
console.log('user detailes', data);
  //  this.router.navigate(['child','4'] , {queryParams : {name:'venki',age:'30'},fragment:'hi'} );
  }
}
