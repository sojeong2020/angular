import { Component, OnInit } from '@angular/core';

import { locale as englishLang } from './i18n/en';
import { locale as welshLang } from './i18n/we';
import { TranslationService } from 'src/app/translation.service';



@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private translationService: TranslationService) { 
      
    this.translationService.addTranslation(englishLang, welshLang)
 
 }
 
  ngOnInit(): void {
  }

}
