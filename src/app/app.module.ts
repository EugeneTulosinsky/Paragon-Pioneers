import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { OrgChartModule } from 'angular13-organization-chart';
import { MaterialModule } from './angular-material/material.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductionsListComponent } from './productions-list/productions-list.component';
import { ProductionComponent } from './production/production.component';
import { IconSheetComponent } from './icon-sheet/icon-sheet.component';
import { ProductionFormComponent } from './production-form/production-form.component';
import { AutoCompletionComponent } from "./auto-completion/auto-completion.component";

@NgModule({
  declarations: [
    AppComponent,
    AutoCompletionComponent,
    ProductionsListComponent,
    ProductionComponent,
    IconSheetComponent,
    ProductionFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    OrgChartModule,
    MaterialModule,
  ],
  exports: [
    AutoCompletionComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
