import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Blog } from 'src/app/models/blog';
import { environment } from 'src/environments/environment';
const BLOGS_API_URL = environment.apiUrl + '/blogs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent {
  blog$: Observable<Blog>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient
  ) {
    this.blog$ = this.activatedRoute.paramMap.pipe(
      map((paramMap) => paramMap.get('id')),
      switchMap((id) => this.httpClient.get<Blog>(`${BLOGS_API_URL}/${id}`))
    );
  }
}
