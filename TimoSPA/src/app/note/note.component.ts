import { Component, OnInit } from '@angular/core';
import { NotesService } from '../_services/notes.service';
import { error } from 'protractor';
import { NoteModel } from '../_models/note.model';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  notes: NoteModel[];

  constructor(private notesService: NotesService) { }

  ngOnInit() {
    this.getNotes();
  }

  getNotes() {
    this.notes = this.notesService.getNotes();

  }

  saveNote(note: any) {
    this.notesService.sendNote(note).subscribe(next => {
      console.log('saved');
      
    }, error => {
      console.log('error');
      
    })
  }
}
