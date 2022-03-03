import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

//import ngx-translate and the http loader
import { TranslateModule , TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { FlexLayoutModule } from '@angular/flex-layout';

import { OppsComponent } from './components/opps/opps.component';
import { RolesComponent } from './components/roles/roles.component';
import { EventsComponent } from './components/events/events.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { OppDetailComponent } from './components/opp-detail/opp-detail.component';
import { DialogExampleComponent } from './components/dialog-example/dialog-example.component';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  listPlugin,
  interactionPlugin
])

@NgModule({
  declarations: [
    AppComponent,
    OppsComponent,
    RolesComponent, 
    EventsComponent,
    CalendarComponent,
    OppDetailComponent,
    DialogExampleComponent,
    FormFieldComponent,
    ToolbarComponent,
  ],
  entryComponents: [DialogExampleComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,

    //configure the imports, ngx-translate and the loader module
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
    
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatNativeDateModule,
    FormsModule, 
    ReactiveFormsModule,
    MatDatepickerModule,
    MatGridListModule,
    MatCardModule,
    MatRadioModule,
    FlexLayoutModule,
    FullCalendarModule // register FullCalendar with you app

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//required for AOT(Ahead of Time) compilation
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}