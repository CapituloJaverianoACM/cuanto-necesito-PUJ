import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicinformationComponent } from './academicinformation.component';

describe('AcademicinformationComponent', () => {
  let component: AcademicinformationComponent;
  let fixture: ComponentFixture<AcademicinformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademicinformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
