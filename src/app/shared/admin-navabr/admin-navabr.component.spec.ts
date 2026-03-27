import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNavabrComponent } from './admin-navabr.component';

describe('AdminNavabrComponent', () => {
  let component: AdminNavabrComponent;
  let fixture: ComponentFixture<AdminNavabrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminNavabrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminNavabrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
