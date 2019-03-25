import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.get(DataService);
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return initial Unselected Providers length', () => {
    let results = service.getUnselectedProviderData();
    expect(results.length).toEqual(3);
  });

  it('should return initial Selected Providers length', () => {
    let results = service.getSelectedProviderData();
    expect(results.length).toEqual(0);
  });

  it('should push an unselected provider from the unselected list to the selected list', () => {
    service.selectProvider('2');
    let results = service.getSelectedProviderData();
    expect(results[0].name).toEqual('Mary');
  });

  it('should push a selected provider from the selected list to the unselected list', () => {
    service.selectProvider('2');
    service.unselectProvider('2');
    let results = service.getUnselectedProviderData();
    expect(results[results.length - 1].name).toEqual('Mary');
  });

  it('should get intial value of localStorage unselected length as 3', () => {
    service.setLocal();
    let results = service.getLocalUnselected();
    expect(results.length).toEqual(3);
  });

  it('should get intial value of localStorage selected length as 0', () => {
    service.setLocal();
    let results = service.getLocalSelected();
    expect(results.length).toEqual(0);
  });
});
