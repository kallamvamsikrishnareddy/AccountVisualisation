import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SapianceComponent } from './sapiance.component';

describe('SapianceComponent', () => {
  let component: SapianceComponent;
  let fixture: ComponentFixture<SapianceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SapianceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SapianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
