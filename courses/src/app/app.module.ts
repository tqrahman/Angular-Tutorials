import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { SwitchCaseComponent } from './switch-case/switch-case.component';
import { SaveComponent } from './save/save.component';
import { JohnComponent } from './john/john.component';
import { InputFormatDirective } from './input-format.directive';
import { ShippingComponent } from './shipping/shipping.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CoursesListComponent,
    SwitchCaseComponent,
    SaveComponent,
    JohnComponent,
    InputFormatDirective,
    ShippingComponent,
    ContactFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
