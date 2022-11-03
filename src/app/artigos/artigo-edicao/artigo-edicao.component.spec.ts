import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtigoEdicaoComponent } from './artigo-edicao.component';

describe('ArtigoEdicaoComponent', () => {
  let component: ArtigoEdicaoComponent;
  let fixture: ComponentFixture<ArtigoEdicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtigoEdicaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtigoEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
