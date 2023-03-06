import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletOneComponent } from './outlet-one.component';

describe('OutletOneComponent', () => {
  let component: OutletOneComponent;
  let fixture: ComponentFixture<OutletOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutletOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutletOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
