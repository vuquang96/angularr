import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { Training } from './training/training.component';
import { ExponentialStrength } from './pipe/exponential-strength.pipe';
import { InfoComponent } from './training/form/info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    Training,
    ExponentialStrength
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
