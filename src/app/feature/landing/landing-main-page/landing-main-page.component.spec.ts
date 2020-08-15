import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingMainPageComponent } from './landing-main-page.component';

describe('LandingMainPageComponent', () => {
  let component: LandingMainPageComponent;
  let fixture: ComponentFixture<LandingMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingMainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
