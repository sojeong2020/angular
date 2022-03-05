import { Component, OnInit } from '@angular/core';

import { locale as englishLang } from './i18n/en';
import { locale as welshLang } from './i18n/we';
import { TranslationService } from 'src/app/translation.service';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css']
})

export class FormFieldComponent {
  registerForm: any;

  constructor( private translationService: TranslationService) { 
      
    this.translationService.addTranslation(englishLang,welshLang)
  }

  ngOnInit(): void{
    this.registerForm = new FormGroup({
      "firstname": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      "surname": new FormControl(null,  [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      "mobile": new FormControl(null, [Validators.required, Validators.pattern('[0-9]*')]),
      "email": new FormControl(null, [Validators.required, Validators.email]),
     // "[matDatepicker]": new FormControl(null, [Validators.required]),
    })
  }  
  
 submitData(){
    console.log(this.registerForm.value,"this.registerForm.value");

    if(this.registerForm.valid.firstname)
    window.alert(`Thank You ${this.registerForm.value.firstname}`);

    this.registerForm.reset();  //reset form value
 }

 get firstname() {
   return this.registerForm.get('firstname');
 }
 get surname(){
   return this.registerForm.get('surname');
 }
 get mobile(){
  return this.registerForm.get('mobile');
}
get email(){
  return this.registerForm.get('email');
}
}
