import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtigoListaComponent } from './artigo-lista.component';

describe('ArtigoListaComponent', () => {
  let component: ArtigoListaComponent;
  let fixture: ComponentFixture<ArtigoListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtigoListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtigoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
