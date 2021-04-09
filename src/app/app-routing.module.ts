import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListComponent } from './pages/blogs/list/list.component';
import { DetailComponent } from './pages/blogs/detail/detail.component';

const routes: Routes = [
  { path: 'blogs/list', component: ListComponent },
  { path: 'blogs/:id', component: DetailComponent },
  { path: '', redirectTo: 'blogs/list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
