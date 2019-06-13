import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdocumentappComponent } from './editdocumentapp.component';

describe('EditdocumentappComponent', () => {
  let component: EditdocumentappComponent;
  let fixture: ComponentFixture<EditdocumentappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditdocumentappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdocumentappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
