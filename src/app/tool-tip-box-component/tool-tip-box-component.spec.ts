import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToolTipBoxComponent } from './tool-tip-box-component';

describe('ToolTipBoxComponent', () => {
  let component: ToolTipBoxComponent;
  let fixture: ComponentFixture<ToolTipBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolTipBoxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ToolTipBoxComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
