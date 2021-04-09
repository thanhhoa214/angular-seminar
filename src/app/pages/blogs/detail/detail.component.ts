import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/models/blog';
import { environment } from 'src/environments/environment';
const BLOGS_API_URL = environment.apiUrl + '/blogs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  blog: Blog | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const id = paramMap.get('id');
      this.httpClient.get<Blog>(`${BLOGS_API_URL}/${id}`).subscribe((blog) => {
        this.blog = blog;
      });
    });
  }
}
