import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManageStorePage } from './manage-store.page';

describe('ManageStorePage', () => {
  let component: ManageStorePage;
  let fixture: ComponentFixture<ManageStorePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ManageStorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
