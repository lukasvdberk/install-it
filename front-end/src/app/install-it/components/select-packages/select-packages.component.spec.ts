import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPackagesComponent } from './select-packages.component';

describe('SelectPackagesComponent', () => {
  let component: SelectPackagesComponent;
  let fixture: ComponentFixture<SelectPackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectPackagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
