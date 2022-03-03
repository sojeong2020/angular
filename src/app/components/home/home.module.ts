import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';


@NgModule({
  declarations: [
   HomeComponent
  ],

  imports: [
    CommonModule,
    TranslateModule,
    HomeRoutingModule 

  ],

  providers:
   []
})
export class HomeModule { }
