import { Component} from '@angular/core';

import { locale as englishLang} from './i18n/en';
import { locale as welshLang } from './i18n/we';
import { TranslationService } from 'src/app/translation.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent {

  constructor(private translationService: TranslationService) { 
      
   this.translationService.addTranslation(englishLang, welshLang)

}


 
}
