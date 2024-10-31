import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialCardsComponent } from './social-cards.component';

describe('SocialCardsComponent', () => {
  let component: SocialCardsComponent;
  let fixture: ComponentFixture<SocialCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SocialCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
