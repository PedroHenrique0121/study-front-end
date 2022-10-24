import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicosLeisCadastroComponent } from './topicos-leis-cadastro.component';

describe('TopicosLeisCadastroComponent', () => {
  let component: TopicosLeisCadastroComponent;
  let fixture: ComponentFixture<TopicosLeisCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicosLeisCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicosLeisCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
