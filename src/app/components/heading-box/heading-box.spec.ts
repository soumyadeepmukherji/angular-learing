import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeadingBox } from './heading-box';

describe('HeadingBox', () => {
  let component: HeadingBox;
  let fixture: ComponentFixture<HeadingBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadingBox],
    }).compileComponents();

    fixture = TestBed.createComponent(HeadingBox);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
