import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilPrincipalComponent } from './accueil-principal.component';

describe('AccueilPrincipalComponent', () => {
  let component: AccueilPrincipalComponent;
  let fixture: ComponentFixture<AccueilPrincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccueilPrincipalComponent]
    });
    fixture = TestBed.createComponent(AccueilPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
