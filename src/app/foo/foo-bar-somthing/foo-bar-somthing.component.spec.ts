import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooBarSomthingComponent } from './foo-bar-somthing.component';

describe('FooBarSomthingComponent', () => {
  let component: FooBarSomthingComponent;
  let fixture: ComponentFixture<FooBarSomthingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooBarSomthingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooBarSomthingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
