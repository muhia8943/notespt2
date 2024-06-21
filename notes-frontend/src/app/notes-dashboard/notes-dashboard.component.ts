import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NoteService } from '../note.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notes-dashboard',
  standalone: true,
  imports: [RouterLink, CommonModule,FormsModule],
  templateUrl: './notes-dashboard.component.html',
  styleUrls: ['./notes-dashboard.component.css']
})
export class NotesDashboardComponent implements OnInit {
  notes: any[] = [];

  constructor(private noteService: NoteService) {}

  ngOnInit():void{
    this.loadNotes();
  }

  loadNotes() {
    this.noteService.getNotes().subscribe(
      (data:any[]) => {
        this.notes = data; // Assuming your backend returns an array of notes
      },
      (error) => {
        console.error('Error fetching notes: ', error);
      }
    );
  }

  createNote() {
    const newNote = { title: 'New Note', content: 'Content of the new note' };
    this.noteService.createNote(newNote).subscribe(() => {
      this.loadNotes(); // Reload notes after creation
    });
  }

  updateNote(id: number) {
    const updatedNote = { title: 'Updated Note', content: 'Updated content' };
    this.noteService.updateNote(id, updatedNote).subscribe(() => {
      this.loadNotes(); // Reload notes after update
    });
  }

  deleteNote(id: number) {
    this.noteService.deleteNote(id).subscribe(
      (response) => {
        console.log('Note deleted successfully:', response);
        // Reload the notes list after deletion
        this.loadNotes();
      },
      (error) => {
        console.error('Error deleting note:', error);
      }
    );
  }
}
