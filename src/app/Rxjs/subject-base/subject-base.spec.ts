import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubjectBase } from './subject-base';

describe('SubjectBase', () => {
  let component: SubjectBase;
  let fixture: ComponentFixture<SubjectBase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectBase],
    }).compileComponents();

    fixture = TestBed.createComponent(SubjectBase);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
