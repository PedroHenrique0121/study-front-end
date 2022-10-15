import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplinaEdicaoComponent } from './disciplina-edicao.component';

describe('DisciplinaEdicaoComponent', () => {
  let component: DisciplinaEdicaoComponent;
  let fixture: ComponentFixture<DisciplinaEdicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisciplinaEdicaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisciplinaEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
