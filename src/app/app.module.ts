import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { SubscibeComponent } from './subscribe/subscibe.component';
import { ConnectComponent } from './connect/connect.component';
import { DudeCalculateComponent } from './dude_calculate/dude-calculate.component';
import { FooterComponent } from './footer/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BlogComponent,
    SubscibeComponent,
    ConnectComponent,
    DudeCalculateComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
