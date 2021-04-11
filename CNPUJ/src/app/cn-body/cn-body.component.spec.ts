import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CNBodyComponent } from './cn-body.component';

describe('CNBodyComponent', () => {
  let component: CNBodyComponent;
  let fixture: ComponentFixture<CNBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CNBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CNBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
