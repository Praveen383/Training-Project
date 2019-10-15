import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsServiceService } from 'src/app/products-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  messages;
  name;
  value: any;
  userForm;
  openmodal: boolean;
  radio: any;
  constructor(private router: Router, private productService: ProductsServiceService) { }

  ngOnInit() {
    console.log(this.userForm);
    this.productService.getMessage().subscribe(res => {
      this.value = res;
    });
  }
  inputData(data) {
    this.productService.postData(this.name);
  }

  onUserFormSubmit(userForm) {
    console.log('form details', userForm.value.email);
    console.log('form details with reference', this.userForm);
    if (userForm.value.email === 'p@gmail.com') {
      this.router.navigate(['/admin']);
    } else if (userForm.value.email !== 'p@gmail.com') {
      this.router.navigate(['/products']);
    }
  }

  onRadioChange(data){
    console.log(":----------",data.target.accept);
    this.radio = data.target.accept;

  }
}
