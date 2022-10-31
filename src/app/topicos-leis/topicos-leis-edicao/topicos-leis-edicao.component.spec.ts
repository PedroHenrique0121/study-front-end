import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicosLeisEdicaoComponent } from './topicos-leis-edicao.component';

describe('TopicosLeisEdicaoComponent', () => {
  let component: TopicosLeisEdicaoComponent;
  let fixture: ComponentFixture<TopicosLeisEdicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicosLeisEdicaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicosLeisEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
