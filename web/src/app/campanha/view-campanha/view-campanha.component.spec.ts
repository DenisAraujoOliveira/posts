import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCampanhaComponent } from './view-campanha.component';

describe('ViewCampanhaComponent', () => {
  let component: ViewCampanhaComponent;
  let fixture: ComponentFixture<ViewCampanhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCampanhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCampanhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
