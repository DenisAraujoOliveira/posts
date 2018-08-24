import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCampanhasInputComponent } from './lista-campanhas-input.component';

describe('ListaCampanhasInputComponent', () => {
  let component: ListaCampanhasInputComponent;
  let fixture: ComponentFixture<ListaCampanhasInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCampanhasInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCampanhasInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
