import { AuthenticationService } from 'src/app/core/services/authservice.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('buttonAnimation', [
      state(
        'hovered',
        style({
          transform: 'scale(1.1)',
          backgroundColor: '#dc3545', // Danger color
        })
      ),
      state(
        'pressed',
        style({
          transform: 'scale(0.9)',
          backgroundColor: '#bd2130', // Darker danger color
        })
      ),
      transition('void => *', animate('300ms')),
      transition('* => void', animate('300ms')),
    ]),
  ],
})
export class HomeComponent {
  title = "Home Page";
  buttonState: 'default' | 'hovered' | 'pressed' = 'default';
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  logout(): void {  
    console.log('Logout button clicked');
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  onHover() {
    this.buttonState = 'hovered';
  }

  onLeave() {
    this.buttonState = 'default';
  }

  onPress() {
    this.buttonState = 'pressed';
  }
}
