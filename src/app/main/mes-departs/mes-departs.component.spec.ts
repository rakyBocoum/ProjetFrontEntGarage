import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesDepartsComponent } from './mes-departs.component';

describe('MesDepartsComponent', () => {
  let component: MesDepartsComponent;
  let fixture: ComponentFixture<MesDepartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MesDepartsComponent]
    });
    fixture = TestBed.createComponent(MesDepartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
