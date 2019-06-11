import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostedappComponent } from './hostedapp.component';

describe('HostedappComponent', () => {
  let component: HostedappComponent;
  let fixture: ComponentFixture<HostedappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostedappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostedappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
