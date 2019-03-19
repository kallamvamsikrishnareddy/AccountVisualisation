import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyMaturityComponent } from './technology-maturity.component';

describe('TechnologyMaturityComponent', () => {
  let component: TechnologyMaturityComponent;
  let fixture: ComponentFixture<TechnologyMaturityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologyMaturityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyMaturityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
