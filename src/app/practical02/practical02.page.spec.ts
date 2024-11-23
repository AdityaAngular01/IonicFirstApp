import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Practical02Page } from './practical02.page';

describe('Practical02Page', () => {
  let component: Practical02Page;
  let fixture: ComponentFixture<Practical02Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Practical02Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
