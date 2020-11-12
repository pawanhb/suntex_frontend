import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuntexPortfolioComponent } from './suntex-portfolio.component';

describe('SuntexPortfolioComponent', () => {
  let component: SuntexPortfolioComponent;
  let fixture: ComponentFixture<SuntexPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuntexPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuntexPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
