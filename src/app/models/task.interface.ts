/* eslint-disable @typescript-eslint/naming-convention */
export interface Task {
  taskNumber?: number;
  type: string;
  state?: string;
  description: string;
  date_generation?: Date;
  date_closing?: Date;
  start_time?: string;
  end_time?: string;
  hour_man?: string;
  imageBefore?: string;
  imageAfter?: string;
  turn: string;
  name?: string;
  position?: string;
}
