import { TestBed } from '@angular/core/testing';

import { NoteService } from './note.service';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import {notes} from './test-data/testdata'


describe('NoteService', () => {
  let service: NoteService;
  let httpTestingController: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoteService, provideHttpClient(), provideHttpClientTesting()]
    });
    service = TestBed.inject(NoteService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should get all notes', () => {
    service.getNotes().subscribe(res=>{
      expect(res).toBeTruthy()
      expect(res.note.length).toBeGreaterThan(0)

      const notes = res.note.find((note: {id: string}) => note.id == '22')
      expect(notes?.content).toBe('did week 7 angular assignment on conecting the frontend to the backend')
    })
    const req = httpTestingController.expectOne('http://localhost:4001/api/notes')
    expect(req.request.method).toBe('GET')

    req.flush({notes})
  })
  it('should create a note', () => {
    const newNote = { title: 'New Note', content: 'Content of the new note' };
    const response = 'Note created successfully';
  
    service.createNote(newNote).subscribe(res => {
      expect(res).toBe(response);
    });
  
    const req = httpTestingController.expectOne('http://localhost:4001/api/notes');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(newNote);
  
    req.flush(response);
  });
  it('should delete a note', () => {
    const noteId = 1;
  
    service.deleteNote(noteId).subscribe(res => {
      expect(res).toBeTruthy();
    });
  
    const req = httpTestingController.expectOne(`http://localhost:4001/api/notes/${noteId}`);
    expect(req.request.method).toBe('DELETE');
  
    req.flush({});
  });
  it('should update a note', () => {
    const noteId = 1;
    const updatedNote = { title: 'Updated Note', content: 'Updated content' };
  
    service.updateNote(noteId, updatedNote).subscribe(res => {
      expect(res).toBeTruthy();
    });
  
    const req = httpTestingController.expectOne(`http://localhost:4001/api/notes/${noteId}`);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(updatedNote);
  
    req.flush(updatedNote);
  });
  
});

