import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FusionFinancialsComponent } from './fusion-financials.component';

describe('FusionFinancialsComponent', () => {
  let component: FusionFinancialsComponent;
  let fixture: ComponentFixture<FusionFinancialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FusionFinancialsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FusionFinancialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
