import {
  ExpirationCompleteEvent,
  Publisher,
  Subjects,
} from "@lvtickets/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
