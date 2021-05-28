import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PauperhomeComponent } from './pauperhome/pauperhome.component';
import { PauperpostComponent } from './pauperpost/pauperpost.component';

@NgModule({
  declarations: [
    AppComponent,
    PauperhomeComponent,
    PauperpostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
