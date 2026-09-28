import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RxjsBase } from './rxjs-base';

describe('RxjsBase', () => {
  let component: RxjsBase;
  let fixture: ComponentFixture<RxjsBase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsBase],
    }).compileComponents();

    fixture = TestBed.createComponent(RxjsBase);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
