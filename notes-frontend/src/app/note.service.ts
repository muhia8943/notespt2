import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private apiUrl = 'http://localhost:4001/api/notes';

  constructor(private http: HttpClient) {}

  getNotes(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
    console.log(this.apiUrl);
    
  }

  getNoteById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createNote(note: any): Observable<any> {
    return this.http.post(this.apiUrl, note, { responseType: 'text' });
  }
  

  updateNote(id: number, note: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, note);
  }

  deleteNote(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}

