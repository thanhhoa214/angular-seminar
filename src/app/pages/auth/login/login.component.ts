import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/pages/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  async loginWithGoogle(): Promise<void> {
    const success = await this.authService.loginWithGoogle();
    if (success) {
      this.router.navigateByUrl('/personal');
    } else {
      alert('Login failed');
    }
  }
}
