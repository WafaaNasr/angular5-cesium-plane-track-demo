import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";

import { AngularCesiumModule } from "angular-cesium";
import { FirehoseComponent } from "./firehose/firehose.component";
import { FirehoseService } from "./services/firehose.service";

@NgModule({
  declarations: [AppComponent, FirehoseComponent],
  imports: [BrowserModule, AngularCesiumModule.forRoot()],
  providers: [FirehoseService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
