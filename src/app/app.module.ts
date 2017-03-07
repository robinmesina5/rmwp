import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NgbTypeaheadSearch } from './typeahead-search.component';
import { NgbTypeaheadConfig } from './typeahead.config';
import { PostListComponent } from './posts/post-list/post-list.component';
import { RmwpRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NgbTypeaheadSearch,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    RmwpRoutingModule
  ],
  providers: [
    NgbTypeaheadConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
