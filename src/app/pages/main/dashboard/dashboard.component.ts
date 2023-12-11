import { Component, Input } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  title = 'DashBoard';
  originalText: string = 'Hello, World!';
  decimalValue: number = 0.456;
  numbers: number[] | undefined;
  @Input() collapsed = false;
  @Input() screenWidth = 0;
  items = this.dataService.getItems();

  constructor(private dataService: DataService) {
    this.numbers = this.dataService.getNumbers();
  }
  incrementNumber(index: number): void {
    this.dataService.incrementNumber(index);
  }
  isSideNavCollapsed = false;

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

  getBodyClass(): string {
    let styleClass = '';
    if (this.collapsed && this.screenWidth > 768) {
      styleClass = 'body-trimmed';
    } else if (
      this.collapsed &&
      this.screenWidth <= 768 &&
      this.screenWidth > 0
    ) {
      styleClass = 'body-md-screen';
    }
    return styleClass;
  }

  Date = new Date();
}
