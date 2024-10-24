import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramoutcomesComponent } from './programoutcomes.component';

describe('ProgramoutcomesComponent', () => {
  let component: ProgramoutcomesComponent;
  let fixture: ComponentFixture<ProgramoutcomesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramoutcomesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramoutcomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
