import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowDetailComponent } from './components/show-detail/show-detail.component';
import { EpisodeListComponent } from './components/episode-list/episode-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CastListComponent } from './components/cast-list/cast-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowDetailComponent,
    EpisodeListComponent,
    CastListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
