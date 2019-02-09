import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DudeCalculateComponent } from './dude-calculate.component';

describe('DudeCalculateComponent', () => {
  let component: DudeCalculateComponent;
  let fixture: ComponentFixture<DudeCalculateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DudeCalculateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DudeCalculateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
