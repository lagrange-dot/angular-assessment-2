import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import {ApiService} from '../core/services/api.service';
import {ApiListComponent} from './api-list/api-list.component';
import {TableModule} from 'primeng/table';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, TableModule, ReactiveFormsModule],
  declarations: [ AppComponent, ApiListComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ApiService]
})
export class AppModule { }
