import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from 'src/app/models/blog.model';
import { environment } from 'src/environments/environment';
const BLOGS_API_URL = environment.apiUrl + '/blogs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  blogs$: Observable<Blog[]>;
  loved = false;

  constructor(private httpClient: HttpClient) {
    this.blogs$ = this.httpClient.get<Blog[]>(BLOGS_API_URL);
  }

  toggleLove(): void {
    this.loved = !this.loved;
  }
}
