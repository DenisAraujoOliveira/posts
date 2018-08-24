import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirCampanhaComponent } from './inserir-campanha.component';

describe('InserirCampanhaComponent', () => {
  let component: InserirCampanhaComponent;
  let fixture: ComponentFixture<InserirCampanhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InserirCampanhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InserirCampanhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
