import { Injectable } from '@angular/core';
import {Notes} from './notes';
import {NOTES} from './notes-data';

@Injectable()
export class NotesService {
  private notess: Notes[]= NOTES;
  private notes: Notes;
  find(name:string):Notes{
    for(var i=0;i<NOTES.length;i++)
    
    {
      if(NOTES[i].name==name)
      return NOTES[i];
    }
  }
  constructor() { }

}
