import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderMainComponent } from './header-main/header-main.component';
import { UsersComponent } from './users/users.component';
import { PassengersComponent } from './passengers/passengers.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SignUpComponent } from './sign-up/sign-up.component';
import {Ng2TelInputModule} from 'ng2-tel-input'; 
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { SearchDropdownPipe } from './search-dropdown.pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { DriversComponent } from './drivers/drivers.component';
import { CarBaseSearchPipe } from './car-base-search.pipe';
import { AffilatesComponent } from './affilates/affilates.component';
import { CorporatesComponent } from './corporates/corporates.component';
import { CustomPayoutComponent } from './custom-payout/custom-payout.component';
import { DisputesComponent } from './disputes/disputes.component';
import { RidesComponent } from './rides/rides.component';
import { ReportsComponent } from './reports/reports.component';
import { SettingsComponent } from './settings/settings.component';
import { CarSearchPipe } from './car-search.pipe';
import { HomePendingComponent } from './home-pending/home-pending.component';
import { AreaComponent } from './area/area.component';
import { PassengersSearchPipe } from './passengers-search.pipe';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderMainComponent,
    UsersComponent,
    PassengersComponent,
    SignUpComponent,
    HomeComponent,
    SearchDropdownPipe,
    DriversComponent,
    CarBaseSearchPipe,
    AffilatesComponent,
    CorporatesComponent,
    CustomPayoutComponent,
    DisputesComponent,
    RidesComponent,
    ReportsComponent,
    SettingsComponent,
    CarSearchPipe,
    HomePendingComponent,
    AreaComponent,
    PassengersSearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    Ng2TelInputModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
