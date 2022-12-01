import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './angular-material/material.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductionsListComponent } from './productions-list/productions-list.component';
import { ProductionComponent } from './production/production.component';
import { AutoCompletionComponent } from "./auto-completion/auto-completion.component";

@NgModule({
  declarations: [
    AppComponent,
    AutoCompletionComponent,
    ProductionsListComponent,
    ProductionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  exports: [
    AutoCompletionComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
