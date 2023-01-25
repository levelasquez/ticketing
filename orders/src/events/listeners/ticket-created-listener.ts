import { Listener, Subjects, TicketCreatedEvent } from "@lvtickets/common";
import { Message } from "node-nats-streaming";

import { queueGroupName } from "./queue-group-name";

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
  queueGroupName = queueGroupName;

  onMessage(data: TicketCreatedEvent["data"], msg: Message) {}
}
