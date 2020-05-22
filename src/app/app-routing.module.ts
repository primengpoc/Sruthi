import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BookDataComponent } from './book-data/book-data.component';
import { StoreComponent } from './store/store.component';
import { CreateStoreComponent } from './create-store/create-store.component';

const routes: Routes = [
  
  {path:'home',component: HomeComponent},
  {path:'about',component: AboutComponent},
  {path:'books',component: BookDataComponent},
  {path:'store',component: StoreComponent},
  {path:'createStore',component: CreateStoreComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
