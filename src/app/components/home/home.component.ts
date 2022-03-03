import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';

import { locale as englishLang } from './i18n/en';
import { locale as welshLang } from './i18n/we';
import { TranslationService } from 'src/app/translation.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( public dialog: MatDialog,
               private translationService:TranslationService) { 
                 
      this.translationService.addTranslation(englishLang,welshLang)

    }

  


  openDialog() {
    this.dialog.open(DialogExampleComponent);
  }

  ngOnInit(): void {
  }

}
