import { Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

const employees = [{'name': 'Adam Makowiecki','email': 'amakowiecki@guidepoint.com','title': 'Research Analyst','location': 'Dusseldorf','phone': '4921178179826'},
                   {'name': 'Adheip Mally','email': 'amally@guidepoint.com','title': 'Research Project Manager','location': 'New York','phone': '(212) 784-9692'},
                   {'name': 'Agnes Lee','email': 'agnes.lee@guidepoint.com','title': 'Senior Relationship Manager','location': 'Singapore','phone': '(656) 595-6781','extension': ' Extension:781','mobile': '(659) 384-6170'},
                   {'name': 'Akaash Patel','email': 'apatel@guidepoint.com','title': 'Team Lead','location': 'London','phone': '442075294007','mobile': '447798893176'},
                   {'name': 'Alan Fookes','email': 'afookes@guidepoint.com','title': 'Research Analyst ','location': 'London','phone': '442037147241','extension': ' Extension:7241'},
                   {'name': 'Alba Lloreta Pane','email': 'alloreta@guidepoint.com','title': 'Research Analyst','location': 'Dusseldorf','phone': '4921178179823','extension': ' Extension:DUS only: 823'},
                   {'name': 'Albert Sebag','email': 'asebag@guidepoint.com','title': 'Chief Executive Officer','location': 'New York','phone': '12127590242','extension': ' Extension:9290'},
                   {'name': 'Alberto Villar','email': 'avillar@guidepoint.com','title': 'Research Project Manager','location': 'Dusseldorf','phone': '4921178179824','extension': ' Extension:DUS only: 824','mobile': '4915114536972'},
                   {'name': 'Alessandra Bellantoni','email': 'abellantoni@guidepoint.com','title': 'Analyst &amp; Team Lead','location': 'New York','phone': '16468733013','extension': ' Extension:9953'},
                   {'name': 'Alexander Milinski','email': 'amilinski@guidepoint.com','title': 'Research Analyst','location': 'Dusseldorf','phone': '4921178179840'},
                   {'name': 'Alexandra O’Brian','email': 'aobrian@guidepoint.com','title': 'Administrative Assistant','location': 'New York','phone': '(646) 395-9324'},
                   {'name': 'Ali Bonafide','email': 'abonafide@guidepoint.com','title': 'Research Analyst','location': 'New York'},
                   {'name': 'Allison Witt','email': 'awitt@guidepoint.com','title': 'Scheduler','location': 'New York','phone': '16463959318','extension': ' Extension:9318'},
                   {'name': 'Allison Visconti','email': 'avisconti@guidepoint.com','title': 'Research Analyst','location': 'New York','phone': '(646) 395-9353'},
                   {'name': 'Alyssa Burstein','email': 'aburstein@guidepoint.com','title': 'Research Manager','location': 'New York','phone': '(646) 395-9366'},
                   {'name': 'Amanda Tng','email': 'atng@guidepoint.com','title': 'Research Analyst','location': 'Singapore','phone': '(656) 597-1581','extension': ' Extension:581'},
                   {'name': 'Amanda Donovan','email': 'adonovan@guidepoint.com','title': 'Research Project Manager','location': 'New York','phone': '16463959271','extension': ' Extension:9271'},
                   {'name': 'Amanda Mao','email': 'amao@guidepoint.com','title': 'Intern','location': 'Shanghai'},
                   {'name': 'Amit Panchal','email': 'apanchal@guidepoint.com','title': 'Sales Operations Analyst','location': 'New York','phone': '(646) 395-9341','extension': ' Extension:9341'},
                   {'name': 'Anahita Daghoghi','email': 'adaghoghi@guidepoint.com','title': 'Research Manager','location': 'New York','phone': '(646) 873-8476'},
                   {'name': 'Andre Sutojo','email': 'asutojo@guidepoint.com','title': 'Research Analyst','location': 'Singapore','phone': '(656) 595-6789','extension': ' Extension:789'},
                   {'name': 'Andrew Vitiello','email': 'avitiello@guidepoint.com','title': 'Project Manager','location': 'New York','phone': '16463959263','extension': ' Extension:9263'},
                   {'name': 'Andrew Yurcik','email': 'ayurcik@guidepoint.com','title': 'Team Assist Analyst','location': 'New York','phone': '(646) 395-9387'},
                   {'name': 'Andrew Prieto','email': 'aprieto@guidepoint.com','title': 'Research Analyst','location': 'New York','phone': '(646) 395-9369','extension': ' Extension:9369'},
                   {'name': 'Andrew Rawana','email': 'arawana@guidepoint.com','title': 'Vice President','location': 'New York','phone': '16463959311','extension': ' Extension:9311'},
                   {'name': 'Angelo Manzi','email': 'amanzi@guidepoint.com','title': 'Research Manager','location': 'Boston','phone': '(617) 207-8615'},
                   {'name': 'Anne Rogers','email': 'arogers@guidepoint.com','title': 'Research Project Manager','location': 'San Francisco','phone': '14159142992'},
                   {'name': 'Annes Kim','email': 'akim@guidepoint.com','title': 'Research Analyst','location': 'New York','phone': '(646) 395-9380'},
                   {'name': 'Annick Koudadjey','email': 'AKoudadjey@guidepoint.com','title': 'Research Analyst','location': 'Dusseldorf','phone': '4921178179836'},
                   {'name': 'Anthony Aiello','email': 'aaiello@guidepoint.com','title': 'Vice President','location': 'New York','phone': '16463959289','extension': ' Extension:9289'},
                   {'name': 'Antwan Istfan','email': 'aistfan@guidepoint.com','title': 'PHP Developer','location': 'New York','phone': '(646) 395-9415'},
                   {'name': 'Arjun Thakker','email': 'athakker@guidepoint.com','title': 'Research Project Manager','location': 'New York','phone': '(646) 873-3008'},
                   {'name': 'Arun Sidhu','email': 'asidhu@guidepoint.com','title': 'Tracker Analyst','location': 'New York','phone': '(646) 395-9364'},
                   {'name': 'Ashlee Dunston','email': 'adunston@guidepoint.com','title': 'Director of Global Healthcare','location': 'New York','phone': '12123752992','extension': ' Extension:9992'},
                   {'name': 'Ashley Chilton','email': 'achilton@guidepoint.com','title': 'Project Manager','location': 'New York','phone': '16468738473','extension': ' Extension:9973'},
                   {'name': 'Ashley Wilson','email': 'awilson@guidepoint.com','title': 'Research Analyst ','location': 'New York','phone': '(646) 395-9330'},
                   {'name': 'Audrey Linnartz','email': 'alinnartz@guidepoint.com','title': 'Research Analyst','location': 'San Francisco','phone': '(415) 226-7729'},
                   {'name': 'Austin Holland','email': 'aholland@guidepoint.com','title': 'Research Analyst','location': 'New York','phone': '(646) 873-3015'},
                   {'name': 'Baotong Liu','email': 'bliu@guidepoint.com','title': 'Intern','location': 'Shanghai'},
                   {'name': 'Bei Fen Lim','email': 'blim@guidepoint.com','title': 'Research Analyst','location': 'Singapore','phone': '(656) 597-1584','extension': ' Extension:584'},
                   {'name': 'Ben Dembele','email': 'bdembele@guidepoint.com','title': 'Accounting Temp','location': 'New York','phone': '(646) 395-9301'},
                   {'name': 'Benjamin Silver','email': 'bsilver@guidepoint.com','title': 'Research Project Manager','location': 'New York','phone': '16463959392','extension': ' Extension:9392'},
                   {'name': 'Benny Fan','email': 'bfan@guidepoint.com','title': 'Research Analyst','location': 'Shanghai','phone': '862152295088'},
                   {'name': 'Benoit Kuhn','email': 'bkuhn@guidepoint.com','title': 'Engagement Manager','location': 'Dusseldorf','phone': '4921178179853'},
                   {'name': 'Bethany Robinson','email': 'brobinson@guidepoint.com','title': 'Research Analyst','location': 'New York','phone': '(646) 395-9383'},
                   {'name': 'Blake Preston','email': 'bpreston@guidepoint.com','title': 'Associate','location': 'New York','phone': '(646) 395-9430'},
                   {'name': 'Bo Le Nguyen Hanh Phuong','email': 'ble@guidepoint.com','title': 'Research Analyst','location': 'Singapore','phone': '(656) 595-6790','extension': ' Extension:790'},
                   {'name': 'Brad Stuart','email': 'bstuart@guidepoint.com','title': 'Managing Director','location': 'New York','phone': '16463959240','extension': ' Extension:9240'},
                   {'name': 'Branden Panico','email': 'bpanico@guidepoint.com','title': 'Corporate Business Development','location': 'New York','phone': '(646) 395-9337'},
                   {'name': 'Brenda Godoy','email': 'bgodoy@guidepoint.com','title': 'Senior Counsel ','location': 'New York','phone': '16463959294','extension': ' Extension:9294'},
                   {'name': 'Brendan Gaffney','email': 'bgaffney@guidepoint.com','title': 'Vice President','location': 'New York','phone': '16463959241'},
                   {'name': 'Brent Jacobs','email': 'bjacobs@guidepoint.com','title': 'Research Project Manager','location': 'San Francisco','phone': '14159142991'},
                   {'name': 'Brian Cosgrove','email': 'bcosgrove@guidepoint.com','title': 'Vice President Corporate','location': 'New York','phone': '16468733001','extension': ' Extension:9901'}
                 ];

@Component({
  selector: 'ngbd-typeahead-search',
  templateUrl: './typeahead-search.component.html',
  styleUrls: ['./typeahead.scss'],
  encapsulation: ViewEncapsulation.None
})

export class NgbTypeaheadSearch {
  public model = '';

  search (text$: Observable<string>) { 
    console.log(employees);
    return text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 2 ? []
        : employees.filter(v => new RegExp(term, 'gi').test(v.name + v.email + v.title + v.location)));
    }
    formatMatches = (value: any) => [value.name, value.email, value.title, value.location, value.phone, value.extension] || '';
}