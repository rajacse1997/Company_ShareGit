import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { NotesService } from './notes.service';
import { PastseacrhComponent } from './pastseacrh/pastseacrh.component';





const appRoutes: Routes = [
  { path: 'crisis-center', component: PastseacrhComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    PastseacrhComponent,
    

  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule
  ],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
