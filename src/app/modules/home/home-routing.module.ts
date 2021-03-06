import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { PresentationComponent } from './components/presentation/presentation.component';


const routes: Routes = [
  { 
    path: '', 
    component: DashboardComponent,
    children: [
      { path: 'presentation', component:  PresentationComponent},
      { path: '**', redirectTo: 'presentation'},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
