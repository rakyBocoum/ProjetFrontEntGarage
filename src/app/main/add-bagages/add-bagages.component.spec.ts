import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBagagesComponent } from './add-bagages.component';

describe('AddBagagesComponent', () => {
  let component: AddBagagesComponent;
  let fixture: ComponentFixture<AddBagagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBagagesComponent]
    });
    fixture = TestBed.createComponent(AddBagagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
