import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouteAndNavPage } from './route-and-nav.page';

describe('RouteAndNavPage', () => {
  let component: RouteAndNavPage;
  let fixture: ComponentFixture<RouteAndNavPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteAndNavPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
