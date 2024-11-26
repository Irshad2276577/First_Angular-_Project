import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SimpleBlogComponent } from './simple-blog/simple-blog.component';
import { AgePipePipe } from './pipes/age-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SimpleBlogComponent,
    AgePipePipe
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
