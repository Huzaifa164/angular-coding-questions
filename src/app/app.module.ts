import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AccordianComponent } from './problems/accordian/accordian.component';
import { ChipsInputComponent } from './problems/chips-input/chips-input.component';
import { SingleChipComponent } from './problems/chips-input/single-chip/single-chip.component';
import { ContactFormComponent } from './problems/contact-form/contact-form.component';
import { GuessTheNumberComponent } from './problems/guess-the-number/guess-the-number.component';
import { ProgressBarComponent } from './problems/progress-bar/progress-bar.component';
import { ToggleButtonComponent } from './problems/toggle-button/toggle-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ChipsInputComponent,
    SingleChipComponent,
    GuessTheNumberComponent,
    AccordianComponent,
    ProgressBarComponent,
    ContactFormComponent,
    ToggleButtonComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
