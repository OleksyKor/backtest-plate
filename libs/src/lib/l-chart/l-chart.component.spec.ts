import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LChartComponent } from './l-chart.component';

describe('LChartComponent', () => {
  let component: LChartComponent;
  let fixture: ComponentFixture<LChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LChartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
