import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicosLeisListaComponent } from './topicos-leis-lista.component';

describe('TopicosLeisListaComponent', () => {
  let component: TopicosLeisListaComponent;
  let fixture: ComponentFixture<TopicosLeisListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicosLeisListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicosLeisListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
