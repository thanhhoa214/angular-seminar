import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  loved = false;

  toggleLove(): void {
    this.loved = !this.loved;
  }
}
