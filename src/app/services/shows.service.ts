import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Show } from '../interfaces/show.interface';
import { Episode } from '../interfaces/episode.interface';
import { Cast } from '../interfaces/cast.interface';
import { Crew } from '../interfaces/crew.interface';

@Injectable({
  providedIn: 'root'
})
export class ShowsService {

  private baseUrl = 'https://api.tvmaze.com/shows/75632';

  constructor(private http: HttpClient) {}

  getShowDetail(): Observable<Show> {
    return this.http.get<Show>(this.baseUrl);
  }

  getEpisodes(): Observable<Episode[]> {
    return this.http.get<Episode[]>(`${this.baseUrl}/episodes`);
  }

  getCast(): Observable<Cast[]> {
    return this.http.get<Cast[]>(`${this.baseUrl}/cast`);
  }

  getCrew(){
  return this.http.get<Crew[]>(`${this.baseUrl}/crew`);
  }
}