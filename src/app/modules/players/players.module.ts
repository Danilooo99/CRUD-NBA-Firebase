import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayersRoutingModule } from './players-routing.module';
import { ButtonCreateComponent } from './components/button-create/button-create.component';
import { CreatePlayerComponent } from './components/create-player/create-player.component';
import { UpdatePlayerComponent } from './components/update-player/update-player.component';
import { ListPlayerComponent } from './components/list-player/list-player.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    ButtonCreateComponent,
    CreatePlayerComponent,
    UpdatePlayerComponent,
    ListPlayerComponent
  ],
  imports: [
    CommonModule,
    PlayersRoutingModule,
    MaterialModule
  ]
})
export class PlayersModule { }
