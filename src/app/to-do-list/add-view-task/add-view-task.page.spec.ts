import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddViewTaskPage } from './add-view-task.page';

describe('AddViewTaskPage', () => {
  let component: AddViewTaskPage;
  let fixture: ComponentFixture<AddViewTaskPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddViewTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
