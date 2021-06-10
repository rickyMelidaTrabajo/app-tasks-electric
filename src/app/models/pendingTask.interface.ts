export interface PendingTask {
  typeTask: String;
  state: String;
  description: String;
  dateGeneration: Date,
  turn: String,
  technician: [
    name: String,
    position: String
  ],
}
