import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public unselectedProviders:any[] = [];
  public selectedProviders:any[] = [];

  getUnselectedProviderData() {
    return this.unselectedProviders;
  }

  getSelectedProviderData() {
    return this.selectedProviders;
  }

  selectProvider(ind:string) {
    let provider = this.unselectedProviders.filter((providerObj) => {
      return providerObj.id === ind;
    });

    this.unselectedProviders = this.unselectedProviders.filter((providerObj) => {
      return providerObj.id !== ind;
    });
    
    this.selectedProviders = this.selectedProviders.concat(provider);

    this.setLocal();
  }

  unselectProvider(ind:string) {
    let provider = this.selectedProviders.filter((providerObj) => {
      return providerObj.id === ind;
    });

    this.selectedProviders = this.selectedProviders.filter((providerObj) => {
      return providerObj.id !== ind;
    });

    this.unselectedProviders = this.unselectedProviders.concat(provider);

    this.setLocal();
  }

  setLocal() {
    localStorage.setItem('Unselected', JSON.stringify(this.unselectedProviders));
    localStorage.setItem('Selected', JSON.stringify(this.selectedProviders));
  }

  getLocalUnselected() {
    let data = localStorage.getItem('Unselected');
    return JSON.parse(data);
  }

  getLocalSelected() {
    let data = localStorage.getItem('Selected');
    return JSON.parse(data);
  }

  onInitGetData(providedStatus: string) {
    if (!localStorage.getItem('Unselected') && !localStorage.getItem('Selected')) {
      return providedStatus === 'Unselected' ? this.getUnselectedProviderData() : this.getSelectedProviderData();
    } else {
      return providedStatus === 'Unselected' ? this.getLocalUnselected() : this.getLocalSelected();
    }
  }

  constructor() { 
    if (!localStorage.getItem('Unselected') && !localStorage.getItem('Selected')) {
      this.unselectedProviders = [{
        id: '1',
        name: 'John',
        address: '123 Greenway Blvd',
        phone: '8991234321',
      },
      {
        id: '2',
        name: 'Mary',
        address: '443 Windwhisper Road',
        phone: '2233211903'
      },
      {
        id: '3',
        name: 'Jason',
        address: '9992 Pumpkin Hollow',
        phone: '4343219384'
      }];

      this.selectedProviders = [];
    } else {
      this.unselectedProviders = this.getLocalUnselected();
      this.selectedProviders = this.getLocalSelected();
    }
  }
}
