import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OPDRegComponent } from './opdreg.component';

describe('OPDRegComponent', () => {
  let component: OPDRegComponent;
  let fixture: ComponentFixture<OPDRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OPDRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OPDRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
