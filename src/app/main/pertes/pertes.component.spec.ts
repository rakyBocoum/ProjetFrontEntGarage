import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PertesComponent } from './pertes.component';

describe('PertesComponent', () => {
  let component: PertesComponent;
  let fixture: ComponentFixture<PertesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PertesComponent]
    });
    fixture = TestBed.createComponent(PertesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
