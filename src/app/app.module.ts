import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import {StrikethroughDirective} from './strikethrough.directive';
import {LimitCharacterDirective} from './limitCharacter.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    StrikethroughDirective,
    LimitCharacterDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
