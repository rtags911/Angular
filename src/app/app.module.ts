import { SidenavComponent } from './pages/main/dashboard/sidenav/sidenav.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthRoutingModule } from './pages/auth/auth-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DashBoardRoutingModule } from './pages/main/dashboard/dashboard-routing.module';
import { MainComponent } from './pages/main/main.component';
import { DataService } from './core/services/data.service';
import { AuthenticationService } from './core/services/authservice.service';

@NgModule({
  declarations: [AppComponent, MainComponent, SidenavComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [DataService, AuthenticationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
