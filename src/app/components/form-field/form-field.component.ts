import { Component, OnInit } from '@angular/core';

import { locale as englishLang } from './i18n/en';
import { locale as welshLang } from './i18n/we';
import { TranslationService } from 'src/app/translation.service';


@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css']
})
export class FormFieldComponent implements OnInit {

  constructor( private translationService: TranslationService) { 
      
    this.translationService.addTranslation(englishLang,welshLang)
  
  }
  
  ngOnInit(): void {
  }

  saveForm(){
    console.log('Form data!');
  }

}
