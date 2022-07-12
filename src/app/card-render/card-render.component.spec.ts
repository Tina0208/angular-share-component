import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRenderComponent } from './card-render.component';

describe('CardRenderComponent', () => {
  let component: CardRenderComponent;
  let fixture: ComponentFixture<CardRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardRenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
