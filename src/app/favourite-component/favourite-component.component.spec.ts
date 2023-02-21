import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteComponentComponent } from './favourite-component.component';

describe('FavouriteComponentComponent', () => {
  let component: FavouriteComponentComponent;
  let fixture: ComponentFixture<FavouriteComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouriteComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
