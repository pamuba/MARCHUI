import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyleBindingComponent } from './syle-binding.component';

describe('SyleBindingComponent', () => {
  let component: SyleBindingComponent;
  let fixture: ComponentFixture<SyleBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyleBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyleBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
