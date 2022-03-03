import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export interface Locale {
  lang: string;
  data: Object;
}

@Injectable({
  providedIn: 'root'
})

export class TranslationService {


  constructor(public translate: TranslateService) {

    translate.addLangs(['en', 'we'])
    translate.setDefaultLang('en');

    translate.use(this.getCurrentLang() || '{}' );
   }

   
   addTranslation(...args: Locale[]){
    const locales = [...args];

    locales.forEach(locale => {
      // use setTranslation() with the third argument set to true
      // to append translations instead of replacing them
      this.translate.setTranslation(locale.lang, locale.data, true);
    }
    )
  }

   getCurrentLang() {
     
    const browserLang: any=this.translate.getBrowserLang();
     // sloved error TS2532: Object is possibly 'undefined
      return browserLang.match(/bn|en/)? browserLang:'en' ;
   }
   
   useLang(languageCode:string){
    this.translate.use(languageCode);
   }
}
