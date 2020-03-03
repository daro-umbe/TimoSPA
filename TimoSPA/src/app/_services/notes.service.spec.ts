/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NotesService } from './notes.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Notes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotesService],
      imports: [
          RouterTestingModule,
          HttpClientTestingModule,
      ]
    });
  });

  it('should ...', inject([NotesService], (service: NotesService) => {
    expect(service).toBeTruthy();
  }));
});
