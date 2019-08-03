import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import { Notes } from '../notes';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  private notes: Notes;
  private notespast : Notes;
  private addedcmp:Notes[]=[];
 
  constructor(private noteservice:NotesService) { }

  ngOnInit() {
  }

  getcmp(name:string):void{
    this.notes= this.noteservice.find(name);
    this.addedcmp.unshift(this.notes);
  }

  getcmpp(name:string):void{
    this.notespast= this.noteservice.find(name);
    
    alert("Predication of upcoming stock of "+this.notespast.name+" are"+this.notespast.price);
  }

}
