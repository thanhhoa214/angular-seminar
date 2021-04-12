import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  user: User;
  constructor(private authService: AuthService, private router: Router) {
    this.user = authService.getUser();
  }

  async logout(): Promise<void> {
    await this.authService.logout();
    this.router.navigateByUrl('/auth');
    alert('Logout successfully');
  }
}
