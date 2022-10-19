import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssuntoEdicaoComponent } from './assunto-edicao.component';

describe('AssuntoEdicaoComponent', () => {
  let component: AssuntoEdicaoComponent;
  let fixture: ComponentFixture<AssuntoEdicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssuntoEdicaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssuntoEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
