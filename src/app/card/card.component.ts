import { Component, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent{
  @Input() cardProvider:Object;
  @Input() flagForSelected:boolean;
  @Input() updateList:any;

  constructor(private appData:DataService) { }

  onClickCard(ind:string) {
    if (!this.flagForSelected) {
      this.appData.selectProvider(ind);
      this.updateList();
    } else {
      this.appData.unselectProvider(ind);
      this.updateList();
    }
  };

}
