import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtigoCadastroComponent } from './artigo-cadastro.component';

describe('ArtigoCadastroComponent', () => {
  let component: ArtigoCadastroComponent;
  let fixture: ComponentFixture<ArtigoCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtigoCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtigoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
