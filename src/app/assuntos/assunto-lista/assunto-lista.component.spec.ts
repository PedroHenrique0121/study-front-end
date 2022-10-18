import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssuntoListaComponent } from './assunto-lista.component';

describe('AssuntoListaComponent', () => {
  let component: AssuntoListaComponent;
  let fixture: ComponentFixture<AssuntoListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssuntoListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssuntoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
