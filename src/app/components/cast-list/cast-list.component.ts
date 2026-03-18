import { Component, Input } from '@angular/core';
import { Cast } from '../../interfaces/cast.interface';

@Component({
  selector: 'app-cast-list',
  templateUrl: './cast-list.component.html',
  styleUrls: ['./cast-list.component.scss']

})
export class CastListComponent {

  @Input() cast: Cast[] = [];

}