import { Component, OnInit, Input } from '@angular/core';
import {Opp} from '../../opp';

@Component({
  selector: 'app-opp-detail',
  templateUrl: './opp-detail.component.html',
  styleUrls: ['./opp-detail.component.css']
})


export class OppDetailComponent implements OnInit {

  @Input() opp?: Opp; //@Input() decorator makes the opp property available for binding by the external OppsComponent.

  constructor() { }

  ngOnInit(): void {
  }

}
