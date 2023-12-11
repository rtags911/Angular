import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})


export class AuthenticationService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  login(username: string, password: string): Observable<boolean> {
    // Dummy logic, replace with your actual authentication logic
    const isValidUser =
      username === 'User' && password === '12345';

    if (isValidUser) {
      this.isAuthenticatedSubject.next(true);
      return new Observable((observer) => {
        observer.next(true);
        observer.complete();
      });
    }

    this.isAuthenticatedSubject.next(false);
    return new Observable((observer) => {
      observer.next(false);
      observer.complete();
    });
  }

  logout(): void {
    this.isAuthenticatedSubject.next(false);
  }
}
