import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetConfiormationComponent } from './get-confiormation.component';

describe('GetConfiormationComponent', () => {
  let component: GetConfiormationComponent;
  let fixture: ComponentFixture<GetConfiormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetConfiormationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetConfiormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
