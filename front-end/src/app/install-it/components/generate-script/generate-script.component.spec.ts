import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateScriptComponent } from './generate-script.component';

describe('GenerateScriptComponent', () => {
  let component: GenerateScriptComponent;
  let fixture: ComponentFixture<GenerateScriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateScriptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
