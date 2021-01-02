import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComplimentFormComponent } from 'src/pages/compliment-form/compliment-form.component';
import { RoutingModule } from './app.router';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    ComplimentFormComponent
  ],
  imports: [
    MaterialModule,
    RoutingModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
