import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QrEscanerPage } from './qr-escaner.page';

describe('QrEscanerPage', () => {
  let component: QrEscanerPage;
  let fixture: ComponentFixture<QrEscanerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QrEscanerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
