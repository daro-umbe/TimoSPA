import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { NoteModel } from '../_models/note.model';
import { error } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

constructor(private _http: HttpClient) { }
  baseUrl = 'http://private-9aad-note10.apiary-mock.com/';

  getNotes(): NoteModel[] {
    this._http.get<NoteModel[]>(this.baseUrl + 'notes').subscribe(response => {
      console.log('notes ', response);
      return response;
    }, error => {
      console.log(error);
    });
    return null;
  }

  sendNote(note: any) {
    return this._http.post<boolean>(this.baseUrl + 'notes', note).pipe(
      map((response: any) => {
        const success = response;
        if (success) {
          console.log('Note sent correctly');
        }
      }, error => {
        console.log(error);
      })
    )
  }
}
