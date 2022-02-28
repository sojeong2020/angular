import { Component, OnInit } from '@angular/core';

import {Opp} from '../../opp';
import {OppService} from '../../opp.service';

@Component({
  selector: 'app-opps',
  templateUrl: './opps.component.html',
  styleUrls: ['./opps.component.css']
})

export class OppsComponent implements OnInit {

  opps: Opp[] = [];

  constructor(private oppService: OppService) { }

  ngOnInit(): void {
    this.getOpps()
  }

  getOpps(): void {
    this.oppService.getOpps()
    .subscribe(opps => this.opps = opps);
  }

 

}
