import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AffilatesComponent } from './affilates/affilates.component';
import { DriversComponent } from './drivers/drivers.component';
import { HomeComponent } from './home/home.component';
import { PassengersComponent } from './passengers/passengers.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UsersComponent } from './users/users.component';
import { CorporatesComponent } from './corporates/corporates.component';
import { CustomPayoutComponent } from './custom-payout/custom-payout.component';
import { DisputesComponent } from './disputes/disputes.component';
import { RidesComponent } from './rides/rides.component';
import { ReportsComponent } from './reports/reports.component';
import { SettingsComponent } from './settings/settings.component';
import { HomePendingComponent } from './home-pending/home-pending.component';
import { AreaComponent } from './area/area.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'home-pending', component: HomePendingComponent },
  { path: 'users/passengers', component: PassengersComponent },
  { path: 'users/drivers', component: DriversComponent },
  { path: 'users/affilates', component: AffilatesComponent },
  { path: 'users/corporates', component: CorporatesComponent },
  { path: 'payments/custom-payout', component: CustomPayoutComponent },
  { path: 'payments/disputes', component: DisputesComponent },
  { path: 'users', component: UsersComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'rides', component: RidesComponent },
  { path: 'area', component: AreaComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'sign-up', component: SignUpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
