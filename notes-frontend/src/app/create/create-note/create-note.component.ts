import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NoteService } from '../../note.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-note',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-note.component.html',
  styleUrl: './create-note.component.css'
})
export class CreateNoteComponent implements OnInit {
  newNote: any = { title: '', content: '' }; // Initialize the newNote object

  constructor(private noteService: NoteService, private router: Router) { }

  ngOnInit(): void {
    // Initialization logic if needed
  }

  saveNote() {
    this.noteService.createNote(this.newNote).subscribe(
      (response) => {
        console.log('Note created successfully:', response);
        // Navigate back to notes dashboard or any other desired route
        this.router.navigate(['/notes-dashboard']); // Updated to match your routing
      },
      (error:any) => {
        console.error('Error creating note:', error);
        // Handle error
      }
    );
  }
}
