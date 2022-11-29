import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenaEdicaoComponent } from './pena-edicao.component';

describe('PenaEdicaoComponent', () => {
  let component: PenaEdicaoComponent;
  let fixture: ComponentFixture<PenaEdicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PenaEdicaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PenaEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
