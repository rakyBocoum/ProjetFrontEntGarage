import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPassagerComponent } from './add-passager.component';

describe('AddPassagerComponent', () => {
  let component: AddPassagerComponent;
  let fixture: ComponentFixture<AddPassagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPassagerComponent]
    });
    fixture = TestBed.createComponent(AddPassagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
