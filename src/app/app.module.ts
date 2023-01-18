import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { OrgChartModule } from 'angular13-organization-chart';
import { MaterialModule } from './angular-material/material.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductionsListComponent } from './productions-list/productions-list.component';
import { ProductionComponent } from './production/production.component';
import { ProductionFormComponent } from './production-form/production-form.component';
import { AutoCompletionComponent } from "./auto-completion/auto-completion.component";
import { CreateProductionDialogComponent } from "./productions-list/create-production-dialog/create-production-dialog.component";

@NgModule({
  declarations: [
    AppComponent,
    AutoCompletionComponent,
    ProductionsListComponent,
    ProductionComponent,
    ProductionFormComponent,
    CreateProductionDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    OrgChartModule,
    MaterialModule,
    FormsModule,
  ],
  exports: [
    AutoCompletionComponent,
    CreateProductionDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
