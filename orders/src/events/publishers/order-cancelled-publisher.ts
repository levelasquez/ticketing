import { Publisher, OrderCancelledEvent, Subjects } from "@lvtickets/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
