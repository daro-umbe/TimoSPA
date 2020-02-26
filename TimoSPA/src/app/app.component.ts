
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { NoteModel } from './_models/note.model';

interface AppState {
  post: NoteModel;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TimoSPA';

  constructor(private store: Store<AppState>) {}
}
