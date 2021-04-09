import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Blog } from './models/blog';
const BLOGS_API_URL = environment.apiUrl + '/blogs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  blogs$: Observable<Blog[]> | null = null;
  loved = false;

  constructor(private httpClient: HttpClient) {}

  toggleLove(): void {
    this.loved = !this.loved;
  }

  loadBlogs(): void {
    this.blogs$ = this.httpClient.get<Blog[]>(BLOGS_API_URL);
  }
}
