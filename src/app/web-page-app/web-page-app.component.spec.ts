import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebPageAppComponent } from './web-page-app.component';

describe('WebPageAppComponent', () => {
  let component: WebPageAppComponent;
  let fixture: ComponentFixture<WebPageAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebPageAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebPageAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
