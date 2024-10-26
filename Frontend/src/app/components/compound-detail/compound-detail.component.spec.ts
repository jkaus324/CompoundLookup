import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoundDetailComponent } from './compound-detail.component';

describe('CompoundDetailComponent', () => {
  let component: CompoundDetailComponent;
  let fixture: ComponentFixture<CompoundDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompoundDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompoundDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
