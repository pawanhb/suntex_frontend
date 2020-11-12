import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuntexServicesComponent } from './suntex-services.component';

describe('SuntexServicesComponent', () => {
  let component: SuntexServicesComponent;
  let fixture: ComponentFixture<SuntexServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuntexServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuntexServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
