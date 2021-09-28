import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaNinComponent } from './meta-nin.component';

describe('MetaNinComponent', () => {
  let component: MetaNinComponent;
  let fixture: ComponentFixture<MetaNinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetaNinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaNinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
