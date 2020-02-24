import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  notes: any;

  constructor(private _http: HttpClient) { }

  ngOnInit() {
    this.getNotes();
  }

  getNotes() {
    this._http.get('http://private-9aad-note10.apiary-mock.com/notes').subscribe(response => {
      this.notes = response;
    }, error => {
      console.log(error);
    });
  }
}
