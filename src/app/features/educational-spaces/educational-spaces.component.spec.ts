import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationalSpacesComponent } from './educational-spaces.component';

describe('EducationalSpacesComponent', () => {
  let component: EducationalSpacesComponent;
  let fixture: ComponentFixture<EducationalSpacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationalSpacesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EducationalSpacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
