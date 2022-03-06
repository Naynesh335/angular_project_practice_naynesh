import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTemplateFormDataComponent } from './show-template-form-data.component';

describe('ShowTemplateFormDataComponent', () => {
  let component: ShowTemplateFormDataComponent;
  let fixture: ComponentFixture<ShowTemplateFormDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTemplateFormDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTemplateFormDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
