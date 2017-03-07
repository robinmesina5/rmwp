import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbTypeaheadSearch } from './typeahead-search.component';
import { NgbTypeaheadConfig } from './typeahead.config';

@Component({
  selector: 'app-root',
  providers: [NgbTypeaheadConfig],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works';
}
