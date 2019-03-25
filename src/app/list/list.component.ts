import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public selectedProviders:any[] = [];
  public unselectedProviders:any[] = [];
  

  refreshParent = () => {
    this.unselectedProviders = this.appData.getUnselectedProviderData();
    this.selectedProviders = this.appData.getSelectedProviderData();
  }

  constructor(private appData:DataService) {}

  ngOnInit() {
    this.unselectedProviders = this.appData.onInitGetData('Unselected');
    this.selectedProviders = this.appData.onInitGetData('Selected');
  }
}
