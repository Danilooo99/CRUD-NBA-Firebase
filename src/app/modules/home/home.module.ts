import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PresentationComponent } from './components/presentation/presentation.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    PresentationComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ]
})
export class HomeModule { }
