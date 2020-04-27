import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SimpleFormComponent } from './simple/simple-form.component';

const routes = [{
  path: 'forms',
  children:[
    {
      path: 'simple',
      component: SimpleFormComponent
    }
  ]
}]

@NgModule({
  imports:      [ FormsModule, ReactiveFormsModule ],
  declarations: [ SimpleFormComponent ],
  exports: [ SimpleFormComponent ]
})
export class MyFormsModule { }