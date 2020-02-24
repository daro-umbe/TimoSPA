import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NoteComponent } from './note/note.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EditorComponent } from './editor/editor.component';
import { NotesService } from './_services/notes.service';

@NgModule({
   declarations: [
      AppComponent,
      NoteComponent,
      NavbarComponent,
      EditorComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule
   ],
   providers: [
      NotesService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
