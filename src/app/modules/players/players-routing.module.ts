import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { CreatePlayerComponent } from './components/create-player/create-player.component';
import { ListPlayerComponent } from './components/list-player/list-player.component';
import { UpdatePlayerComponent } from './components/update-player/update-player.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'list', component: ListPlayerComponent},
      { path: 'create', component: CreatePlayerComponent},
      { path: 'edit/:id', component: UpdatePlayerComponent},
      { path: '**', redirectTo: 'list'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayersRoutingModule { }
