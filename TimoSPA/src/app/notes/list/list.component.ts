import { Component, OnInit } from '@angular/core';
import { NoteModel } from 'src/app/_models/note.model';
import { Observable } from 'rxjs/internal/Observable';
import { NotesService } from 'src/app/_services/notes.service';
import { Store, select } from '@ngrx/store';

import * as fromNotes from '../state/list.reducer';
import * as notesActions from '../state/list.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  // notes: NoteModel[];
  notes$: Observable<NoteModel[]>;

  constructor(private notesService: NotesService, private _store: Store<fromNotes.NoteState>) { }

  ngOnInit() {
    this.notes$ = this._store.pipe(select(fromNotes.getNotes));
    this._store.dispatch(new notesActions.GetNotes());
  }

  saveNote(note: NoteModel) {
    this._store.dispatch(new notesActions.SaveNewNote(note));

    // this.notesService.sendNote(note).subscrundefinedibe(next => {
    //   console.log('saved');
      
    // }, error => {
    //   console.log('error');
      
    // })
  }

  deleteNote(note: NoteModel) {
    console.log('note', note);
    this._store.dispatch(new notesActions.DeleteNote(note.id));
  }
}
