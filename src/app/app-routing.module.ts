import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router'
import { FormsComponent } from './forms/forms.component';
import { FoodComponent } from './food/food.component';

const AppRoutes: Routes = [
  {path: 'forms', component: FormsComponent},
  {path: 'food', component: FoodComponent},
  {path: '', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(AppRoutes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
