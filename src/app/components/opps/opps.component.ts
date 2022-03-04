import { Component, OnInit } from '@angular/core';

import {Opp} from '../../opp';
import {OppService} from '../../opp.service';

import { locale as englishLang } from './i18n/en';
import { locale as welshLang } from './i18n/we';
import { TranslationService } from 'src/app/translation.service';


@Component({
  selector: 'app-opps',
  templateUrl: './opps.component.html',
  styleUrls: ['./opps.component.css']
})

export class OppsComponent implements OnInit {

  opps: Opp[] = [];

  constructor(private oppService: OppService,
             private translationService: TranslationService) { 

              this.translationService.addTranslation(englishLang, welshLang)
            }

  ngOnInit(): void {
    this.getOpps()
  }

  getOpps(): void {
    this.oppService.getOpps()
    .subscribe(opps => this.opps = opps);
  }

 

}
