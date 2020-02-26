import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { NoteComponent } from './notes/note/note.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EditorComponent } from './notes/editor/editor.component';
import { NotesService } from './_services/notes.service';
import { AboutComponent } from './about/about.component';
import { appRoutes } from './routes';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './notes/list/list.component';
import { reducer } from './notes/state/list.reducer';
import { environment } from 'src/environments/environment';
import { CommonModule } from '@angular/common';
import { NotesEffects } from './notes/state/list.effects';

@NgModule({
   declarations: [
      AppComponent,
      NoteComponent,
      NavbarComponent,
      EditorComponent,
      AboutComponent,
      HomeComponent,
      ListComponent,
   ],
   imports: [
      RouterModule.forRoot(appRoutes),
      BrowserModule,
      CommonModule,
      HttpClientModule,
      FormsModule,
      BsDropdownModule.forRoot(),
      BrowserAnimationsModule,
      StoreModule.forRoot(reducer),
      StoreModule.forFeature('notes', reducer),
      StoreDevtoolsModule.instrument({
         maxAge: 25,
         logOnly: environment.production
      }),
      EffectsModule.forRoot([]),
      EffectsModule.forFeature([NotesEffects])
   ],
   providers: [
      NotesService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
