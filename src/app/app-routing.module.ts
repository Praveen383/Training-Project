import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { RegistorComponent } from './registor/registor.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { AdminComponent } from './admin/admin.component';
import { ProductsComponent } from './products/products.component';
// import { ProductsServiceService } from './products-service.service';



const routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {path: 'login', component: LoginComponent },
    {path: 'registor', component: RegistorComponent },
    {path: 'products', component: ProductsComponent },
    {path: 'cart-items', component: CartItemsComponent },
    {path: 'admin', component: AdminComponent },
    {path: '**', component: ErrorComponent },
];


@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes),
    ],
    providers: [],
    exports: [RouterModule]
})
export class AppRoutingModule { }
