import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'forecast',
    loadChildren: () =>
      import('./forecast/forecast.module')
        .then(m => m.ForeacastModule)
  },
  { path: '', redirectTo: '/forecast', pathMatch: 'full' },
  { path: '**', redirectTo: '/forecast', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
