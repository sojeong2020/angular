import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { OppsComponent } from './components/opps/opps.component';
import { RolesComponent } from './components/roles/roles.component';
import { EventsComponent } from './components/events/events.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { OppDetailComponent } from './components/opp-detail/opp-detail.component';

const routes: Routes = [
  
  { path: 'home' , component: HomeComponent},
  { path: 'profile' , component: ProfileComponent},
  { path: 'opps' , component: OppsComponent},
  { path: 'oppDetail' , component: OppDetailComponent},
  { path: 'roles' , component: RolesComponent},
  { path: 'events' , component: EventsComponent},
  { path: 'calendar' , component: CalendarComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
