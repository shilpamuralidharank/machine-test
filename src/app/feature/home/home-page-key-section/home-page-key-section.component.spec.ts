import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageKeySectionComponent } from './home-page-key-section.component';

describe('HomePageKeySectionComponent', () => {
  let component: HomePageKeySectionComponent;
  let fixture: ComponentFixture<HomePageKeySectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageKeySectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageKeySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
