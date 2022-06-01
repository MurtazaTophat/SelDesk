import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditnationalityComponent } from './editnationality.component';

describe('EditnationalityComponent', () => {
  let component: EditnationalityComponent;
  let fixture: ComponentFixture<EditnationalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditnationalityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditnationalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
