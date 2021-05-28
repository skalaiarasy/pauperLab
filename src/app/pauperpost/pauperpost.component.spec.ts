import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PauperpostComponent } from './pauperpost.component';

describe('PauperpostComponent', () => {
  let component: PauperpostComponent;
  let fixture: ComponentFixture<PauperpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PauperpostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PauperpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
