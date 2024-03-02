import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './module/material/material.module';
import { TableComponent } from './components/table/table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './components/input/input.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [AppComponent, TableComponent, InputComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
