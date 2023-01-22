import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ValidarTokenGuard } from './guards/validar-token.guard';

const routes: Routes = [
  {
    path : 'Auth',
    component: AuthComponent
  },
  {
    path: 'Dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(x => x.DashboardModule),
    canActivate: [ValidarTokenGuard]
  },
  {
    path : '**',
    redirectTo: 'Auth',
    pathMatch: 'full'
  },
  { path: '**' , redirectTo:'Auth', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
