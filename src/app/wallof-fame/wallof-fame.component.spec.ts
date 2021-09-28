import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallofFameComponent } from './wallof-fame.component';

describe('WallofFameComponent', () => {
  let component: WallofFameComponent;
  let fixture: ComponentFixture<WallofFameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WallofFameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WallofFameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
