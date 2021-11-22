import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultApiComponent } from './result-api.component';

describe('ResultApiComponent', () => {
  let component: ResultApiComponent;
  let fixture: ComponentFixture<ResultApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
