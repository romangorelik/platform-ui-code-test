import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { DataService } from '../data.service';
import { PhoneNumberPipe } from '../phone-number.pipe';
import { ListComponent } from '../list/list.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardComponent, PhoneNumberPipe, ListComponent ], providers: [ DataService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;

    component.cardProvider = {
      id: '3',
      name: 'Jason',
      address: '9992 Pumpkin Hollow',
      phone: '4343219384'
    };

    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a button', () => {
    spyOn(component, "onClickCard");

    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.onClickCard).toHaveBeenCalled();
    });
  });

  it('should display name as Jason', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.card').textContent).toContain('Jason');
  });

  it('should display address as 9992 Pumpkin Hollow', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.card').textContent).toContain('9992 Pumpkin Hollow');
  });

  it('should display phone number as (434) 321-9384', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.card').textContent).toContain('(434) 321-9384');
  });
});

