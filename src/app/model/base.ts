export enum ArrivalDepartureType {
  actual,
  estimated,
  enroute
}
export enum MessageType {
  flightplan,
  departure,
  arrival,
  position,
  ground_position,
  vehicle_position,
  onblock,
  offblock,
  cancellation
}
export enum ActionType {
  ADD_OR_UPDATE,
  DELETE
}
export interface Base {
  action: ActionType;
  type: MessageType;
  ident: string;
  id: string;
  pitr: string;
}
