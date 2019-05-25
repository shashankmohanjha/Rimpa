import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DbCompHomeComponent } from './db-comp-home/db-comp-home.component';

const routes: Routes = [
  {
    path: '',
    component: DbCompHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
