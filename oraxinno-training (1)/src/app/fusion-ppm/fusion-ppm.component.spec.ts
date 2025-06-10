import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FusionPpmComponent } from '../fusion-ppm.component';

describe('FusionPpmComponent', () => {
  let component: FusionPpmComponent;
  let fixture: ComponentFixture<FusionPpmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FusionPpmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FusionPpmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
