import { Component, OnInit } from '@angular/core';
import { ShowsService } from './services/shows.service';

import { Show } from './interfaces/show.interface';
import { Episode } from './interfaces/episode.interface';
import { Cast } from './interfaces/cast.interface';
import { Crew } from './interfaces/crew.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  show!: Show;
  episodes: Episode[] = [];
  cast: Cast[] = [];
  crew: Crew[] = [];

  constructor(private showsService: ShowsService) {}

  ngOnInit(): void {

    this.showsService.getShowDetail()
      .subscribe(data => this.show = data);

    this.showsService.getEpisodes()
      .subscribe(data => this.episodes = data);

    this.showsService.getCast()
      .subscribe(data => this.cast = data);

  }

}
