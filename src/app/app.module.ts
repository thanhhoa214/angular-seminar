import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListComponent } from './pages/blogs/list/list.component';
import { DetailComponent } from './pages/blogs/detail/detail.component';
import { AppRoutingModule } from './app-routing.module';
import { FirebaseModule } from './firebase.module';
@NgModule({
  declarations: [AppComponent, ListComponent, DetailComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FirebaseModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
