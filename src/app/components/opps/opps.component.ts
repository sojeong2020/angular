import { Component, OnInit } from '@angular/core';
import {Opp} from '../../opp';
import { OPPS } from 'src/app/mock-opps';

@Component({
  selector: 'app-opps',
  templateUrl: './opps.component.html',
  styleUrls: ['./opps.component.css']
})
export class OppsComponent implements OnInit {

  opps = OPPS;  // define a component property called opps to expose OPPS array for binding

  selectedOpp?: Opp; //Rename the component's opp property to selectedOpp but don't assign it. There is no selected opp when the application starts.

  onSelect(opp: Opp): void {
    this.selectedOpp = opp;
  } // onSelect() method, which assigns the clicked opp from the template to the component's selectedOpp.

  constructor() { }

  ngOnInit(): void {
  }

}
