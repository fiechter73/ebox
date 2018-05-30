import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContractComponent } from './contract/contract.component';
import { ContractDetailComponent } from './contract-detail/contract-detail.component';
import { ContractCreateComponent } from './contract-create/contract-create.component';
import { ContractEditComponent } from './contract-edit/contract-edit.component';
import { ProductComponent } from './product/product.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductRowComponent } from './product-row/product-row.component';
import { ProductImageComponent } from './product-image/product-image.component';
import { PriceDisplayComponent } from './price-display/price-display.component';
import { ProductDepartmentComponent } from './product-department/product-department.component';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


const appRoutes: Routes = [
  {
    path: 'contact',
    component: ContactComponent,
    data: { title: 'Contact List' }
  },
  {
    path: 'contact-detail',
    component: ContactDetailComponent,
    data: { title: 'Contact Details' }
  },
  {
    path: 'contact-detail/:id',
    component: ContactDetailComponent,
    data: { title: 'Contact Details' }
  },
  {
    path: 'contact-create',
    component: ContactCreateComponent,
    data: { title: 'Create Contact' }
  },
  {
    path: 'contact-edit',
    component: ContactEditComponent,
    data: { title: 'Edit Contact' }
  },
  {
    path: 'contact-edit/:id',
    component: ContactEditComponent,
    data: { title: 'Edit Contact' }
  },
  { path: '',
    redirectTo: '/contact',
    pathMatch: 'full'
  },
  {
    path: 'contract/:id',
    component: ContractComponent,
    data: { title: 'Contract List' }
  },
  {
    path: 'contract',
    component: ContractComponent,
    data: { title: 'Contract List' }
  },
  {
    path: 'contract-detail/:id',
    component: ContractDetailComponent,
    data: { title: 'Contract Details' }
  },
  {
    path: 'contract-detail',
    component: ContractDetailComponent,
    data: { title: 'Contract Details' }
  },
  {
    path: 'contract-edit',
    component: ContractEditComponent,
    data: { title: 'Edit Contract' }
  },
  {
    path: 'contract-create/:id',
    component: ContractCreateComponent,
    data: { title: 'Create Contract' }
  },
  {
    path: 'contract-create',
    component: ContractCreateComponent,
    data: { title: 'Create Contract' }
  },
  {
    path: 'product',
    component: ProductComponent,
    data: { title: 'Product List' }
  },
  {
    path: 'product-create',
    component: ProductCreateComponent,
    data: { title: 'Create Product' }
  },

];

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ContactDetailComponent,
    ContactCreateComponent,
    ContactEditComponent,
    ContractComponent,
    ContractDetailComponent,
    ContractCreateComponent,
    ContractEditComponent,
    ProductComponent,
    ProductCreateComponent,
    ProductsListComponent,
    ProductRowComponent,
    ProductImageComponent,
    PriceDisplayComponent,
    ProductDepartmentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatListModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
