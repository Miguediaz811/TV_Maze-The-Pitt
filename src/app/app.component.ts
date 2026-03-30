import { Component, OnInit, HostListener } from '@angular/core';
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
export class AppComponent implements OnInit {
  show!: Show;
  episodes: Episode[] = [];
  cast: Cast[] = [];
  crew: Crew[] = [];

  deferredPrompt: any = null;
  showInstallButton = false;

  constructor(private showsService: ShowsService) {}

  @HostListener('window:beforeinstallprompt', ['$event'])
  onBeforeInstallPrompt(event: any) {
    event.preventDefault();
    this.deferredPrompt = event;
    this.showInstallButton = true;
  }

  @HostListener('window:appinstalled')
  onAppInstalled() {
    this.showInstallButton = false;
    this.deferredPrompt = null;
  }

  async installApp() {
    if (!this.deferredPrompt) return;
    this.deferredPrompt.prompt();
    const { outcome } = await this.deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      this.showInstallButton = false;
    }
    this.deferredPrompt = null;
  }

  ngOnInit(): void {
    this.showsService.getShowDetail()
      .subscribe(data => this.show = data);

    this.showsService.getEpisodes()
      .subscribe(data => this.episodes = data);

    this.showsService.getCast()
      .subscribe(data => this.cast = data);
  }
}