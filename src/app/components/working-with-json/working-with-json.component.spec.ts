import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingWithJsonComponent } from './working-with-json.component';

describe('WorkingWithJsonComponent', () => {
  let component: WorkingWithJsonComponent;
  let fixture: ComponentFixture<WorkingWithJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkingWithJsonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkingWithJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
