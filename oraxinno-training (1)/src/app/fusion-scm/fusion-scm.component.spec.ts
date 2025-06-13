import { ComponentFixture, TestBed } from '@angular/core/testing';

// Update the import path below if the file is in the same folder:
import { FusionScmComponent } from './fusion-scm.component';

describe('FusionScmComponent', () => {
  let component: FusionScmComponent;
  let fixture: ComponentFixture<FusionScmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FusionScmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FusionScmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
