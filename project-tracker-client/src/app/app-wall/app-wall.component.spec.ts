import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppWallComponent } from './app-wall.component';

describe('AppWallComponent', () => {
  let component: AppWallComponent;
  let fixture: ComponentFixture<AppWallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppWallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
