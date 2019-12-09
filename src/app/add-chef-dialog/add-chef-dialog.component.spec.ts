import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChefDialogComponent } from './add-chef-dialog.component';

describe('AddChefDialogComponent', () => {
  let component: AddChefDialogComponent;
  let fixture: ComponentFixture<AddChefDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddChefDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChefDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
