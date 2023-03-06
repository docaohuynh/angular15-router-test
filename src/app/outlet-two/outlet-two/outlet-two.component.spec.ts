import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletTwoComponent } from './outlet-two.component';

describe('OutletTwoComponent', () => {
  let component: OutletTwoComponent;
  let fixture: ComponentFixture<OutletTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutletTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutletTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
