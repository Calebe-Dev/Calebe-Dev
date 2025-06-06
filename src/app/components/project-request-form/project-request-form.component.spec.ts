import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectRequestFormComponent } from './project-request-form.component';

describe('ProjectRequestFormComponent', () => {
  let component: ProjectRequestFormComponent;
  let fixture: ComponentFixture<ProjectRequestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectRequestFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
