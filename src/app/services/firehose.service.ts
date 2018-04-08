import { Injectable, OnInit } from "@angular/core";
import { HubConnection, TransferMode, TransportType } from "@aspnet/signalr";
import { Observable } from "rxjs/Observable";
import { AcNotification, ActionType } from "angular-cesium";
import { Subscriber } from "rxjs/Subscriber";
import { Position } from "../model/position";

@Injectable()
export class FirehoseService implements OnInit {
  //#region  Fields
  private hubConnection: HubConnection;
  //#endregion

  //#region Service-Initialization Method/Handlers

  constructor() {
    this.hubConnection = new HubConnection(
      "http://localhost:57284/flighttrack",
      { transport: TransportType.LongPolling }
    );
    this.hubConnection
      .start()
      .then(() => console.log("Connection started!"))
      .catch(err => {
        console.log("Error while establishing connection :(");
        console.log(err);
      });
  }

  ngOnInit(): void {}
  //#endregion

  //#region Firehose-Methods

  public get(): Observable<AcNotification> {
    return Observable.create((observer: Subscriber<any>) => {
      this.hubConnection.on("Send", (position: Position) => {
        const acNotification = new AcNotification();
        acNotification.id = position.id;

        if (position.action.valueOf() === ActionType.ADD_UPDATE) {
          acNotification.actionType = ActionType.ADD_UPDATE;
          acNotification.entity = this.convertToCesiumObj(position);
        } else if (position.action.valueOf() === ActionType.DELETE) {
          acNotification.actionType = ActionType.DELETE;
        }
        observer.next(acNotification);
        console.log("Got point");
      });
    });
  }
  private convertToCesiumObj(entity: Position): any {
    const acEntity: any = {};
    const fixedHeading = entity.heading - Math.PI / 2;
    const heading = fixedHeading;
    const pitch = Cesium.Math.toRadians(0.0);
    const roll = Cesium.Math.toRadians(0.0);

    acEntity.alt = Math.round(entity.alt);
    acEntity.text = entity.ident;
    acEntity.position = Cesium.Cartesian3.fromDegrees(
      entity.lon,
      entity.lat,
      entity.alt
    );
    acEntity.rotation = heading;
    const hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
    acEntity.orientation = Cesium.Transforms.headingPitchRollQuaternion(
      acEntity.position,
      hpr
    );

    return acEntity;
  }
  //#endregion
}
