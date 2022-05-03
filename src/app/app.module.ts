import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppHeaderComponent } from './features/app-header/app-header.component';
import { ThoughtsCollectionComponent } from './features/thoughts-collection/thoughts-collection.component';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';
import { AppLoginComponent } from './features/app-login/app-login.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    ThoughtsCollectionComponent,
    ContentLayoutComponent,
    AppLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
