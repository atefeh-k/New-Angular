import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './general/layout/layout.component';
import { ProvinceSelectComponent } from './location/province-select/province-select.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ProvinceSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    httpClientModule,
    FormsModule,
  ],
  exports: [LayoutComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
