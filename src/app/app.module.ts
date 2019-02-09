import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { FooterComponent } from './footer/footer.component';
import { FormsComponent } from './forms/forms.component';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule } from  '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './/app-routing.module';
import { FoodComponent } from './food/food.component';
import { DudeCalculateComponent } from './dude-calculate/dude-calculate.component';


const appRoutes: Routes = [
  { path: 'blog', component: BlogComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BlogComponent,
    FooterComponent,
    FormsComponent,
    FoodComponent,
    DudeCalculateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    [ MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule],
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
  ],
  exports: 
  [ MatButtonModule, MatInputModule, MatCardModule, MatFormFieldModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
