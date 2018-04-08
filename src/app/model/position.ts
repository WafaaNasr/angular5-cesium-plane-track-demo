import { MessageType, Base } from './base';
import { Waypoint } from './waypoint';

export interface Position extends Base {
  type: MessageType;
  facility_hash: string;
  lon: number;
  air_ground: string;
  clock: number;
  lat: number;
  updateType: string;
  facility_name: string;
  orig: string;
  alt: number;
  gps_alt: number;
  hexid: string;
  gs: number;
  squawk: string;
  rp1lat: number;
  reg: string;
  aircrafttype: string;
  route: string;
  dest: string;
  heading: number;
  speed: number;
  eta: number;
  atcident: string;
  baro_alt: number;
  oat: number;
  rp1alt: number;
  rp1lon: number;
  edt: number;
  winds: number;
  waypoints: Array<Waypoint>;
  ete: number;
  fob: number;
  rp1clock: number;
  altChange: string;
}
