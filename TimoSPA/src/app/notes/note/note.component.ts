import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../_services/notes.service';
import { error } from 'protractor';
import { NoteModel } from '../../_models/note.model';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  notes: NoteModel[];
  notes2$: Observable<NoteModel[]>;

  constructor(private notesService: NotesService, private _store: Store<any>) { }

  ngOnInit() {
    // this._store.dispatch({type: 'GET_NOTES'});
    // this.notes2$ = this._store.pipe(select('notes'));
    // console.log('dodispecovane');
    
    // this._store.dispatch({})
    // this.getNotes();
  }

  // getNotes() {
  //   console.log('zac');
  //   this._store.dispatch({type: 'GET_NOTES'})
    
  //   this.notesService.getNotes().subscribe(response => {
  //     console.log('notes ', response);
  //     this.notes = response;
  //   }, error => {
  //     console.log(error);
  //   });
  //   return null;
  //   console.log('kon');

  // }

  saveNote(note: any) {
    this.notesService.sendNote(note).subscribe(next => {
      console.log('saved');
      
    }, error => {
      console.log('error');
      
    })
  }
}
