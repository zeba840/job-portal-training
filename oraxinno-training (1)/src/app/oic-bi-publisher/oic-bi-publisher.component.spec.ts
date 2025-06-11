import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OicBiPublisherComponent } from '../oic-bi-publisher.component';

describe('OicBiPublisherComponent', () => {
  let component: OicBiPublisherComponent;
  let fixture: ComponentFixture<OicBiPublisherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OicBiPublisherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OicBiPublisherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
