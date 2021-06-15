import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLibOneComponent } from './my-lib-one.component';

describe('MyLibOneComponent', () => {
  let component: MyLibOneComponent;
  let fixture: ComponentFixture<MyLibOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyLibOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLibOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
