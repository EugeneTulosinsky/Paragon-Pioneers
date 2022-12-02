import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductionsListComponent } from './productions-list/productions-list.component';
import { ProductionComponent } from './production/production.component';
import { IconSheetComponent } from './icon-sheet/icon-sheet.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductionsListComponent,
    ProductionComponent,
    IconSheetComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
