import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PauperhomeComponent } from './pauperhome.component';

describe('PauperhomeComponent', () => {
  let component: PauperhomeComponent;
  let fixture: ComponentFixture<PauperhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PauperhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PauperhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
