import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeinformationComponent } from './gradeinformation.component';

describe('GradeinformationComponent', () => {
  let component: GradeinformationComponent;
  let fixture: ComponentFixture<GradeinformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradeinformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
