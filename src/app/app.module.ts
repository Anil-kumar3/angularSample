import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { ProductListComponent } from './product-list/product-list.component';
import {CartService} from './cart.service';
import { FormLoginComponent } from './form-login/form-login.component';

const appRoutes: Routes = [
  { path: 'form-login', component: FormLoginComponent},
 

  { path: 'product-list', component: ProductListComponent},
  { path: '**', component: PageNotFoundComponentComponent}
 
];

@NgModule({
  declarations: [
    AppComponent,
    
    PageNotFoundComponentComponent,
    ProductListComponent,
    FormLoginComponent,
  ],
  imports: [
   
    BrowserModule,
    ReactiveFormsModule,
     RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
    
   )
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
