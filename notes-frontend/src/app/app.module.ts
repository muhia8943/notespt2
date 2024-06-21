// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // For form handling
import { RouterModule } from '@angular/router'; // For routing

import { AppComponent } from './app.component';
import { NotesDashboardComponent } from './notes-dashboard/notes-dashboard.component';
import { CreateNoteComponent } from './create/create-note/create-note.component';
import { LandingComponent } from './landing/landing.component'; // Import other components as needed
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { routes } from './app.routes'; // Import the routes configuration

@NgModule({
  declarations: [
    AppComponent,
    NotesDashboardComponent,
    CreateNoteComponent,
    LandingComponent, // Declare components here
    LoginComponent,
    RegisterComponent,
    // other components...
  ],
  imports: [
    BrowserModule,
    FormsModule, // Import FormsModule
    RouterModule.forRoot(routes), // Configure the RouterModule with routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
