import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNoteComponent } from './create-note.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

describe('CreateNoteComponent', () => {
  let component: CreateNoteComponent;
  let fixture: ComponentFixture<CreateNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateNoteComponent,HttpClientTestingModule,RouterTestingModule,FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(CreateNoteComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
