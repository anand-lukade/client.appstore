import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditthirdpartyappComponent } from './editthirdpartyapp.component';

describe('EditthirdpartyappComponent', () => {
  let component: EditthirdpartyappComponent;
  let fixture: ComponentFixture<EditthirdpartyappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditthirdpartyappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditthirdpartyappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
