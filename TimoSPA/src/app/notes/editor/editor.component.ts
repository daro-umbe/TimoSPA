import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { NoteModel } from '../../_models/note.model';
import { NotesService } from '../../_services/notes.service';
import { AlertifyService } from '../../_services/alertify.service';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as notesActions from '../state/list.actions';
import * as fromNotes from '../state/list.reducer';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, map, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit, OnDestroy {
  model: any = {};
  previousNoteTitle = '';
  note$: Observable<NoteModel>;
  componentActive = true;

  constructor(private _store: Store<any>, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    const noteId = this._route.snapshot.paramMap.get('id');
    if (noteId) {
      this._store.dispatch(new notesActions.GetNoteById(+noteId));
      this._store.pipe(select(fromNotes.getCurrentNote),
        takeWhile(() => this.componentActive)).subscribe(item => {
        if (item) {
          this.previousNoteTitle = item.title;
          this.model.title = item.title;
          this.model.id = item.id;
        }
      });
    }
  }

  onResetNoteTitle() {
    this.model.title = this.previousNoteTitle;
  }

  submit() {
    console.log('submit');
    console.log('adding', this.model);

    const noteModel: NoteModel = { title: this.model.title };
    if (this.model.id) {
      noteModel.id = this.model.id;
      this._store.dispatch(new notesActions.EditNote(noteModel));
    } else {
      this._store.dispatch(new notesActions.SaveNewNote(noteModel));
    }
  }
  ngOnDestroy(): void {
    this.componentActive = false;
  }
}
