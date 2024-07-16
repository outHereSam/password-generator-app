import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratedPasswordComponent } from './generated-password.component';

describe('GeneratedPasswordComponent', () => {
  let component: GeneratedPasswordComponent;
  let fixture: ComponentFixture<GeneratedPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneratedPasswordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeneratedPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
