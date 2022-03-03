import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';

import{ locale as englishLang} from '../assets/i18n/en';
import{ locale as welshLang} from '../assets/i18n/we';
import { TranslationService } from './translation.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  currentLang: string ='en';
  
  constructor(private observer: BreakpointObserver,
              private translationService:TranslationService
  ) {
    this.translationService.addTranslation(englishLang,welshLang)
  }

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
  }

  ngOnInit(){
    this.currentLang = this.translationService.getCurrentLang();
  }

  onLangChange(currentLang:string){
    this.translationService.useLang(currentLang);
    console.log(currentLang,"currentLANG!!!")

  }

  languages=[
    {name:'English',lang:'en'},
    {name:'Welsh',lang:'we'},
  ]

 
}