import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirPostComponent } from './inserir-post.component';

describe('InserirPostComponent', () => {
  let component: InserirPostComponent;
  let fixture: ComponentFixture<InserirPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InserirPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InserirPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
