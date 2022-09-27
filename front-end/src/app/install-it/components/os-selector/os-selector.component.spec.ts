import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsSelectorComponent } from './os-selector.component';

describe('OsSelectorComponent', () => {
  let component: OsSelectorComponent;
  let fixture: ComponentFixture<OsSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OsSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OsSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
