import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditwebpageappComponent } from './editwebpageapp.component';

describe('EditwebpageappComponent', () => {
  let component: EditwebpageappComponent;
  let fixture: ComponentFixture<EditwebpageappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditwebpageappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditwebpageappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
