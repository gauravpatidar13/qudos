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
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderMainComponent,
    UsersComponent,
    PassengersComponent,
    SignUpComponent,
    HomeComponent,
    SearchDropdownPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    Ng2TelInputModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
