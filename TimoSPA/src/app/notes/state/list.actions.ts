import { Action } from '@ngrx/store';
import { NoteModel } from 'src/app/_models/note.model';

export enum NoteActionTypes {
    GetNotes = '[List] Get All Notes',
    GetNotesSuccess = '[List] Get All Notes Success',
    GetNotesFail = '[List] Get All Note Fail',
    GetNoteById = '[List] Get Note By Id',
    GetNoteByIdSuccess = '[List] Get Note By Id Success',
    GetNoteByIdFail = '[List] Get Note By Id Fail',
    SaveNewNote = '[List] Save New Note',
    SaveNewNoteSuccess = '[List] Save New Note Success',
    SaveNewNoteFail = '[List] Save New Note Fail',
    ClearCurrentNote = '[List] Clear Current Note',
    DeleteNote = '[List] Delete Current Note',
    DeleteNoteSuccess = '[List] Delete Current Note Success',
    DeleteNoteFail = '[List] Delete Current Note Fail',
    EditNote = '[List] Edit Current Note',
    EditNoteSuccess = '[List] Edit Current Note Success',
    EditNoteFail = '[List] Edit Current Note Fail'
}

export class GetNotes implements Action {
    readonly type = NoteActionTypes.GetNotes;
}

export class GetNotesSuccess implements Action {
    readonly type = NoteActionTypes.GetNotesSuccess;

    constructor(public payload: NoteModel[]) {}
}

export class GetNotesFail implements Action {
    readonly type = NoteActionTypes.GetNotesFail;

    constructor(public payload: string) {}
}

export class GetNoteById implements Action {
    readonly type = NoteActionTypes.GetNoteById;

    constructor(public payload: number) {}
}

export class GetNoteByIdSuccess implements Action {
    readonly type = NoteActionTypes.GetNoteByIdSuccess;

    constructor(public payload: NoteModel) {}
}

export class GetNoteByIdFail implements Action {
    readonly type = NoteActionTypes.GetNoteByIdFail;

    constructor(public payload: string) {}
}
export class SaveNewNote implements Action {
    readonly type = NoteActionTypes.SaveNewNote;

    constructor(public payload: NoteModel) {}
}

export class SaveNewNoteSuccess implements Action {
    readonly type = NoteActionTypes.SaveNewNoteSuccess;

    constructor(public payload: boolean) {}
}

export class SaveNewNoteFail implements Action {
    readonly type = NoteActionTypes.SaveNewNoteFail;

    constructor(public payload: string) {}
}

export class ClearCurrentNote implements Action {
    readonly type = NoteActionTypes.ClearCurrentNote;
}

export class EditNote implements Action {
    readonly type = NoteActionTypes.EditNote;

    constructor(public payload: NoteModel) {}
}

export class EditNoteSuccess implements Action {
    readonly type = NoteActionTypes.EditNoteSuccess;

    constructor(public payload: boolean) {}
}

export class EditNoteFail implements Action {
    readonly type = NoteActionTypes.EditNoteFail;

    constructor(public payload: string) {}
}

export class DeleteNote implements Action {
    readonly type = NoteActionTypes.DeleteNote;

    constructor(public payload: number) {}
}

export class DeleteNoteSuccess implements Action {
    readonly type = NoteActionTypes.DeleteNoteSuccess;

    constructor(public payload: boolean) {}
}

export class DeleteNoteFail implements Action {
    readonly type = NoteActionTypes.DeleteNoteFail;

    constructor(public payload: string) {}
}



export type NotesActions = GetNotes
    | GetNotesSuccess
    | GetNotesFail
    | GetNoteById
    | GetNoteByIdSuccess
    | GetNoteByIdFail
    | SaveNewNote
    | SaveNewNoteSuccess
    | SaveNewNoteFail
    | ClearCurrentNote
    | EditNote
    | EditNoteSuccess
    | EditNoteFail
    | DeleteNote
    | DeleteNoteSuccess
    | DeleteNoteFail;
