import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditemployeetypeComponent } from './editemployeetype.component';

describe('EditemployeetypeComponent', () => {
  let component: EditemployeetypeComponent;
  let fixture: ComponentFixture<EditemployeetypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditemployeetypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditemployeetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
