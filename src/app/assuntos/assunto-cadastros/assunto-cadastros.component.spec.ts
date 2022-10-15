import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssuntoCadastrosComponent } from './assunto-cadastros.component';

describe('AssuntoCadastrosComponent', () => {
  let component: AssuntoCadastrosComponent;
  let fixture: ComponentFixture<AssuntoCadastrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssuntoCadastrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssuntoCadastrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
