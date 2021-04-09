import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Blog } from './models/blog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  blogs: Blog[] = [];
  loved = false;

  constructor(private httpClient: HttpClient) {}

  toggleLove(): void {
    this.loved = !this.loved;
  }

  loadBlogs(): void {
    const blogsApiUrl = environment.apiUrl + '/blogs';
    console.log(blogsApiUrl);

    this.httpClient.get<Blog[]>(blogsApiUrl).subscribe((data) => {
      console.log(data);

      this.blogs = data;
    });
  }
}
