import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SCEComponent } from './sce.component';

describe('SCEComponent', () => {
  let component: SCEComponent;
  let fixture: ComponentFixture<SCEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SCEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SCEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
