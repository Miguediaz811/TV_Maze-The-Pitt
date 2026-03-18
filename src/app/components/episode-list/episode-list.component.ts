import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.scss']
})
export class EpisodeListComponent implements OnChanges {

  @Input() episodes: any[] = [];

  seasons: { [key: number]: any[] } = {};
  openedSeason: number | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['episodes'] && this.episodes.length) {
      this.groupBySeason();
    }
  }

  groupBySeason() {

    this.seasons = {};

    this.episodes.forEach(ep => {

      if (!this.seasons[ep.season]) {
        this.seasons[ep.season] = [];
      }

      this.seasons[ep.season].push(ep);

    });

  }

  toggleSeason(season: number) {

    this.openedSeason =
    this.openedSeason === season ? null : season;

  }

}