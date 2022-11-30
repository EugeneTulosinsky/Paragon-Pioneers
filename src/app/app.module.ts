import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductionsListComponent } from './productions-list/productions-list.component';
import { ProductionComponent } from './production/production.component';
import { ProductionFormComponent } from './production-form/production-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductionsListComponent,
    ProductionComponent,
    ProductionFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
