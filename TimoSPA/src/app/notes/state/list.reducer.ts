import { NoteModel } from 'src/app/_models/note.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NotesActions, NoteActionTypes } from './list.actions';

export interface NoteState {
    currentNote: NoteModel;
    notes: NoteModel[];
    error: string;
}

const initialState: NoteState = {
    currentNote: null,
    notes: [],
    error: ''
};

const getNotesFeatureState = createFeatureSelector<NoteState>('notes');

export const getNotes = createSelector(
    getNotesFeatureState,
    state => state.notes
);

export const getCurrentNote = createSelector(
    getNotesFeatureState,
    state => state.currentNote
);

export const getError = createSelector(
    getNotesFeatureState,
    state => state.error
);

export function reducer(state = initialState, action: NotesActions): NoteState {
    switch (action.type) {
        case NoteActionTypes.GetNotes:
            return {
                ...state,
            };
        case NoteActionTypes.GetNotesSuccess:
            return {
                ...state,
                error: '',
                notes: action.payload
            };

        case NoteActionTypes.GetNotesFail:
            return {
                ...state,
                notes: [],
                error: action.payload
            };
        case NoteActionTypes.GetNoteById:
            return {
                ...state,
            };
        case NoteActionTypes.GetNoteByIdSuccess:
            return {
                ...state,
                error: '',
                currentNote: action.payload
            };

        case NoteActionTypes.GetNoteByIdFail:
            return {
                ...state,
                currentNote: null,
                error: action.payload
            };

        case NoteActionTypes.EditNote:
            return {
                ...state,
                currentNote: action.payload
            };
        case NoteActionTypes.ClearCurrentNote:
            return {
                ...state,
                currentNote: null
            };
        case NoteActionTypes.SaveNewNote:
            return {
                ...state,
                currentNote: null
            };
        case NoteActionTypes.DeleteNote:
            return {
                ...state,
                currentNote: null
            };
        case NoteActionTypes.DeleteNoteSuccess:
            console.log('deleted note');
            
            return {
                ...state,
                currentNote: null
            };

        default:
            break;
    }
}
