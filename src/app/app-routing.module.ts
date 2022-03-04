import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OppsComponent } from './components/opps/opps.component';
import { RolesComponent } from './components/roles/roles.component';
import { EventsComponent } from './components/events/events.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { OppDetailComponent } from './components/opp-detail/opp-detail.component';
import { FormFieldComponent } from './components/form-field/form-field.component';

const routes: Routes = [
  
  { path: 'home' , loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)},
  { path: 'profile', component: FormFieldComponent},
  { path: 'roles' , component: RolesComponent},
  { path: 'events' ,component: EventsComponent},
  { path: 'oppDetail/:id' , component: OppDetailComponent},
  { path: 'opps' , component: OppsComponent},
  { path: 'calendar' , component: CalendarComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
