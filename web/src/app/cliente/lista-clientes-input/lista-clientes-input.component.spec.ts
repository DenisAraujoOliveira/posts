import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaClientesInputComponent } from './lista-clientes-input.component';

describe('ListaClientesInputComponent', () => {
  let component: ListaClientesInputComponent;
  let fixture: ComponentFixture<ListaClientesInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaClientesInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaClientesInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
