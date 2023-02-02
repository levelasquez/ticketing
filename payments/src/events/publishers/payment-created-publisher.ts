import { PaymentCreatedEvent, Publisher, Subjects } from "@lvtickets/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
