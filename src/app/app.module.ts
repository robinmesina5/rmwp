import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NgbTypeaheadSearch } from './typeahead-search.component';
import { NgbTypeaheadConfig } from './typeahead.config';

@NgModule({
  declarations: [
    AppComponent,
    NgbTypeaheadSearch
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [
    NgbTypeaheadConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
