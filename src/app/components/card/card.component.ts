import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent{
  @Input() public src: string = "assets/card-images/no-image.jpg";
  @Input() public alt: string = "عکس بازی";
  @Input() public title: string = "بازی";
  @Input() public description: string = "توضیحات بازی";
  @Input() public price: string = "-";

}
