import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrRedirectComponent } from './qr-redirect.component';

describe('QrUserComponent', () => {
  let component: QrRedirectComponent;
  let fixture: ComponentFixture<QrRedirectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QrRedirectComponent]
    });
    fixture = TestBed.createComponent(QrRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
