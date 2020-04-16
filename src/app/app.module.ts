import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { AppComponent } from './app.component';

// import {ModuleRegistry} from '@ag-grid-community/core';     // @ag-grid-community/core will always be implicitly available
// import {ClientSideRowModelModule} from "@ag-grid-community/client-side-row-model";
// ModuleRegistry.registerModules([
//   ClientSideRowModelModule
// ]);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
