import { Time } from "@angular/common";

export interface CompletedTask {
  typeTask: String;
  state: String;
  description: String;
  dateGeneration: Date;
  dateClosing: Date;

  hourStart: Time;
  hourEnd: Time;
  hourMan: Time;

  photoBefore: File;
  photoAfter: File;

  turn: String,
  technician: [
    name: String,
    position: String
  ],
}
