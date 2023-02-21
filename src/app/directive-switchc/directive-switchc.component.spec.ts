import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveSwitchcComponent } from './directive-switchc.component';

describe('DirectiveSwitchcComponent', () => {
  let component: DirectiveSwitchcComponent;
  let fixture: ComponentFixture<DirectiveSwitchcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectiveSwitchcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveSwitchcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
