import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { NotesService } from 'src/app/_services/notes.service';
import * as notesActions from './list.actions';
import { mergeMap, map, catchError, switchMap } from 'rxjs/operators';

import { NoteModel } from '../../_models/note.model';
import { of } from 'rxjs';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Injectable()
export class NotesEffects {
    constructor(private actions$: Actions, private notesService: NotesService, private _alertify: AlertifyService) { }

    @Effect()
    loadNotes$ = this.actions$.pipe(
        ofType(notesActions.NoteActionTypes.GetNotes),
        mergeMap((action: notesActions.GetNotes) => this.notesService.getNotes().pipe(
            map((notes: NoteModel[]) => (new notesActions.GetNotesSuccess(notes))),
            catchError(error => of(new notesActions.GetNotesFail(error)))
        ))
    );

    @Effect()
    loadNoteById$ = this.actions$.pipe(
        ofType(notesActions.NoteActionTypes.GetNoteById),
        mergeMap((action: notesActions.GetNoteById) => this.notesService.getNoteById(action.payload).pipe(
            map((note: NoteModel) => (new notesActions.GetNoteByIdSuccess(note))),
            catchError(error => of(new notesActions.GetNoteByIdFail(error)))
        ))
    );

    @Effect()
    deleteNote$ = this.actions$.pipe(
        ofType(notesActions.NoteActionTypes.DeleteNote),
        mergeMap((action: notesActions.DeleteNote) => this.notesService.deleteNote(action.payload).pipe(
            // we need to reload lost of notes after deleting one to get fresh status of list of notes
            switchMap((res: boolean) => {
                this._alertify.success('Note deleted successfully');
                return [
                    new notesActions.DeleteNoteSuccess(res),
                    new notesActions.GetNotes()
                ];
            }),
            catchError(error => {
                this._alertify.success('An error occured when deleting a Note');
                return of(new notesActions.EditNoteFail(error));
            }
        ))
    ));

    @Effect()
    saveNote$ = this.actions$.pipe(
        ofType(notesActions.NoteActionTypes.SaveNewNote),
        mergeMap((action: notesActions.SaveNewNote) => this.notesService.sendNote(action.payload).pipe(
            // we need to reload lost of notes after creating one to get fresh status of list of notes
            switchMap((res: NoteModel) => {
                this._alertify.success('New Note sent successfully');
                return [
                    new notesActions.SaveNewNoteSuccess(!!res),
                    new notesActions.GetNotes(),
                ];
            }),
            catchError(error => {
                this._alertify.success('Error saving Note');
                return of(new notesActions.EditNoteFail(error));
            }
        ))
    ));

    @Effect()
    editNote$ = this.actions$.pipe(
        ofType(notesActions.NoteActionTypes.EditNote),
        mergeMap((action: notesActions.EditNote) => this.notesService.editNote(action.payload).pipe(
            // we need to reload lost of notes after editing one to get fresh status of list of notes
            switchMap((res: NoteModel) => {
                this._alertify.success('Existing Note was successfully updated');
                return [
                    new notesActions.EditNoteSuccess(!!res),
                    new notesActions.GetNotes()
                ];
            }),
            catchError(error => {
                this._alertify.success('Error updating Note');
                return of(new notesActions.EditNoteFail(error));
            }
        ))
    ));
}
