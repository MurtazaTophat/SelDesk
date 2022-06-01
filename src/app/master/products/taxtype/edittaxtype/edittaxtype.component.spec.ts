import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittaxtypeComponent } from './edittaxtype.component';

describe('EdittaxtypeComponent', () => {
  let component: EdittaxtypeComponent;
  let fixture: ComponentFixture<EdittaxtypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdittaxtypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdittaxtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
