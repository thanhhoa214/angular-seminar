import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from 'src/app/models/blog';
import { environment } from 'src/environments/environment';
const BLOGS_API_URL = environment.apiUrl + '/blogs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  blogs$: Observable<Blog[]> | null = null;
  loved = false;

  constructor(private httpClient: HttpClient) {
    this.loadBlogs();
  }

  toggleLove(): void {
    this.loved = !this.loved;
  }

  loadBlogs(): void {
    this.blogs$ = this.httpClient.get<Blog[]>(BLOGS_API_URL);
  }
}
