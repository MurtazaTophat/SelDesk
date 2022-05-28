import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsprintComponent } from './reportsprint.component';

describe('ReportsprintComponent', () => {
  let component: ReportsprintComponent;
  let fixture: ComponentFixture<ReportsprintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportsprintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
