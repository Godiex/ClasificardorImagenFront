import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialNetworksButtonComponent } from './social-networks-button.component';

describe('SocialNetworksButtonComponent', () => {
  let component: SocialNetworksButtonComponent;
  let fixture: ComponentFixture<SocialNetworksButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialNetworksButtonComponent]
    });
    fixture = TestBed.createComponent(SocialNetworksButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
