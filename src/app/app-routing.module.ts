import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AffilatesComponent } from './affilates/affilates.component';
import { DriversComponent } from './drivers/drivers.component';
import { HomeComponent } from './home/home.component';
import { PassengersComponent } from './passengers/passengers.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'users/passengers', component: PassengersComponent },
  { path: 'users/drivers', component: DriversComponent },
  { path: 'users/affilates', component: AffilatesComponent },
  { path: 'users', component: UsersComponent },
  { path: 'sign-up', component: SignUpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
