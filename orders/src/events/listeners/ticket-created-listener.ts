import { Listener, Subjects, TicketCreatedEvent } from "@lvtickets/common";
import { Message } from "node-nats-streaming";

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
  queueGroupName = "orders-service";

  onMessage(data: TicketCreatedEvent["data"], msg: Message) {}
}
