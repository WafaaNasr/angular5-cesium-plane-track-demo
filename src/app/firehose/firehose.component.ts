import { AcNotification , MapLayerProviderOptions} from "angular-cesium";
import { Observable } from "rxjs/Observable";
import { Component, OnInit } from "@angular/core";
import { FirehoseService } from "../services/firehose.service";


@Component({
  selector: "app-firehose",
  templateUrl: "./firehose.component.html",
  styleUrls: ["./firehose.component.css"]
})
export class FirehoseComponent implements OnInit {

  private MapLayerProviderOptions = MapLayerProviderOptions;
  private planes$: Observable<AcNotification>;

  constructor(private firehoseService: FirehoseService) {
    this.planes$ = this.firehoseService.get();
  }

  ngOnInit() {}
}
