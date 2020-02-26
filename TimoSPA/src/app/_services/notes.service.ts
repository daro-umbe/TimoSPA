import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { NoteModel } from '../_models/note.model';
import { error } from 'protractor';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

constructor(private _http: HttpClient) { }
  baseUrl = 'http://private-9aad-note10.apiary-mock.com/';

  mockData = [{
    "id": 1, "title": "Jogging in park"
  }, {
    "id": 2, "title": "Pick-up posters from post-office"
  },{
    "id": 3, "title": "Jogging in park"
  }, {
    "id": 4, "title": "Pick-up posters from post-office"
  }, {
    "id": 5, "title": "Jogging in park"
  }, {
    "id": 6, "title": "Pick-up posters from post-office"
  }, {
    "id": 7, "title": "Pick-up posters from post-office"
  },{
    "id": 8, "title": "Jogging in park"
  }, {
    "id": 9, "title": "Pick-up posters from post-office"
  },{
    "id": 10, "title": "Jogging in park"
  }, {
    "id": 11, "title": "Pick-up posters from post-office"
  }];


  getNotes(): Observable<NoteModel[]> {
    // use next statement to retrieve more data as real service returns array with only 2 items
    // return of(this.data);
    return this._http.get<NoteModel[]>(this.baseUrl + 'notes');
  }

  // service returns instance of NoteModel with id: 2 and title hard-coded,
  // that's why you see only 'Pick-up posters from post-office' in EditorComponent even you clicked on different Note
  getNoteById(noteId: number): Observable<NoteModel> {
    return this._http.get<NoteModel>(this.baseUrl + 'notes/' + noteId);
  }

  sendNote(note: NoteModel): Observable<NoteModel> {
    return this._http.post<NoteModel>(this.baseUrl + 'notes', note);
  }

  editNote(note: NoteModel) {
    return this._http.put<NoteModel>(this.baseUrl + 'notes/' + note.id, note);
  }

  deleteNote(noteId: number) {
    return this._http.delete<boolean>(this.baseUrl + 'notes/' + noteId);
  }
}
