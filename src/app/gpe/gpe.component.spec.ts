import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GPEComponent } from './gpe.component';

describe('GPEComponent', () => {
  let component: GPEComponent;
  let fixture: ComponentFixture<GPEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GPEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GPEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
