import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import {Opp} from './opp';
import {OPPS} from './mock-opps';


@Injectable({
  providedIn: 'root'
})
// @Injectable() decorator accepts a metadata object for the service, the same way the @Component() decorator 

export class OppService {

  constructor() { }

  getOpps(): Observable<Opp[]> {
    const opps = of(OPPS);
    return opps;
  }
//of(OPPS) returns an Observable<Opp[]> that emits a single value, the array of mock opps.

  getOpp(id: number): Observable<Opp>{
    const opp = OPPS.find(h => h.id === id)!;
    return of(opp);
  }

}

//OppService could get hero data from anywhere—a web service, local storage, or a mock data source.

// getOpps(), getOpp() has an asynchronous signature. It returns a mock opp as an Observable, using the RxJS of() function.