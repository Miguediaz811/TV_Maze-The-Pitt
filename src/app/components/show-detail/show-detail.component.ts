import { Component, Input } from '@angular/core';
import { Show } from '../../interfaces/show.interface';


@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.scss']
})
export class ShowDetailComponent {

  @Input() show!: Show;

}