import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaGrinderComponent } from './meta-grinder.component';

describe('MetaGrinderComponent', () => {
  let component: MetaGrinderComponent;
  let fixture: ComponentFixture<MetaGrinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetaGrinderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaGrinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
