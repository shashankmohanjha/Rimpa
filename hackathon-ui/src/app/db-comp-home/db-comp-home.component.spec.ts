import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbCompHomeComponent } from './db-comp-home.component';

describe('DbCompHomeComponent', () => {
  let component: DbCompHomeComponent;
  let fixture: ComponentFixture<DbCompHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbCompHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbCompHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
