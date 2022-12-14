import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplinaListaComponent } from './disciplina-lista.component';

describe('DisciplinaListaComponent', () => {
  let component: DisciplinaListaComponent;
  let fixture: ComponentFixture<DisciplinaListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisciplinaListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisciplinaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
