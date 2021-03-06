import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {OppService} from '../../opp.service';
import {Opp} from '../../opp';

import { locale as englishLang } from './i18n/en';
import { locale as welshLang } from './i18n/we';
import { TranslationService } from 'src/app/translation.service';

@Component({
  selector: 'app-opp-detail',
  templateUrl: './opp-detail.component.html',
  styleUrls: ['./opp-detail.component.css']
})


export class OppDetailComponent implements OnInit {

  @Input() opp?: Opp; //@Input() decorator makes the opp property available for binding by the external OppsComponent.

  constructor(
    private route: ActivatedRoute,   //The ActivatedRoute holds information about the route to this instance of the HeroDetailComponent. This component is interested in the route's parameters extracted from the URL. The "id" parameter is the id of the hero to display.

    private oppService: OppService,  //The OppService gets opp data from the remote server and this component will use it to get the opp-to-display.
    
    private location: Location, //The location is an Angular service for interacting with the browser.

    private translationService: TranslationService) {
      
    this.translationService.addTranslation(englishLang, welshLang)
    }
   //Inject the ActivatedRoute, OppService, and Location services into the constructor, saving their values in private fields:


  ngOnInit(): void {
    this.getOpp();
  }

  getOpp(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.oppService.getOpp(id)
    .subscribe(opp => this.opp = opp);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if(this.opp) {
      console.log('update!')
    }
  }

}
