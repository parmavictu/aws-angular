import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplimentFormComponent } from './compliment-form.component';

describe('ComplimentFormComponent', () => {
  let component: ComplimentFormComponent;
  let fixture: ComponentFixture<ComplimentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplimentFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplimentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
