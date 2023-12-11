import { NgChartsModule } from 'ng2-charts';
import { NgModule } from '@angular/core';


import { DashboardComponent } from './dashboard.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from '../home/home.component';
import { MediaComponent } from './media/media.component';
import { SettingsComponent } from './settings/settings.component';
import { DashBoardRoutingModule } from './dashboard-routing.module';
import { ItemListComponent } from './item-list/item-list.component';
import { DataService } from 'src/app/core/services/data.service';
import { HighlightDirective } from 'src/app/core/directive/highlight.directive';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsService } from 'src/app/core/services/products.service';
import { CurrencyFormatDirective } from 'src/app/core/directive/currency-format.directive';
import { ProductAddComponent } from './product-add/product-add.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    MediaComponent,
    SettingsComponent,
    HighlightDirective,
    ItemListComponent,
    ProductListComponent,
    CurrencyFormatDirective,
    ProductAddComponent,
  ],
  providers: [DataService, ProductsService],
  imports: [CommonModule, FormsModule, DashBoardRoutingModule, NgChartsModule],
})
export class DashboardModule {}
