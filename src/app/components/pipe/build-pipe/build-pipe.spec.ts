import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuildPipe } from './build-pipe';

describe('BuildPipe', () => {
  let component: BuildPipe;
  let fixture: ComponentFixture<BuildPipe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildPipe],
    }).compileComponents();

    fixture = TestBed.createComponent(BuildPipe);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
