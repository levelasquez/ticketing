import { Publisher, Subjects, TicketUpdatedEvent } from "@lvtickets/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
