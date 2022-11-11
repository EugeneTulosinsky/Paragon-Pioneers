import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductionsListComponent } from './productions-list/productions-list.component';
import { ProductionComponent } from './production/production.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductionsListComponent,
    ProductionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
