import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenasCadastroComponent } from './penas-cadastro.component';

describe('PenasCadastroComponent', () => {
  let component: PenasCadastroComponent;
  let fixture: ComponentFixture<PenasCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PenasCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PenasCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
