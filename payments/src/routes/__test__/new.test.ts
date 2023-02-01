import request from "supertest";
import mongoose from "mongoose";
import { OrderStatus } from "@lvtickets/common";

import { app } from "../../app";
import { stripe } from "../../stripe";
import { Order } from "../../models/order";

// If you use the mock - Remember to change the name of the file from stripe.ts.old to stripe.ts
// You don't need the setEnvVars.ts, you can delete it and remove from the package json config
// Or you can just rename it from setEnvVars.ts.example to setEnvVars.ts and config a fake value
// It is not gona be used
// jest.mock("../../stripe");

it("returns a 404 when pucharsing an order that does not exists", async () => {
  await request(app)
    .post("/api/payments")
    .set("Cookie", global.signin())
    .send({
      token: "asd",
      orderId: new mongoose.Types.ObjectId().toHexString(),
    })
    .expect(404);
});

it("returns a 401 when pucharsing an order that doesnt belong to the user", async () => {
  const order = Order.build({
    id: new mongoose.Types.ObjectId().toHexString(),
    price: 20,
    status: OrderStatus.Created,
    userId: new mongoose.Types.ObjectId().toHexString(),
    version: 0,
  });
  await order.save();

  await request(app)
    .post("/api/payments")
    .set("Cookie", global.signin())
    .send({
      token: "asd",
      orderId: order.id,
    })
    .expect(401);
});

it("returns a 400 when pucharsing a cancelled order", async () => {
  const userId = new mongoose.Types.ObjectId().toHexString();

  const order = Order.build({
    id: new mongoose.Types.ObjectId().toHexString(),
    price: 20,
    status: OrderStatus.Cancelled,
    userId,
    version: 0,
  });
  await order.save();

  await request(app)
    .post("/api/payments")
    .set("Cookie", global.signin(userId))
    .send({
      token: "asd",
      orderId: order.id,
    })
    .expect(400);
});

it("returns a 201 with valid inputs", async () => {
  // Delete if you use the mock
  const price = Math.floor(Math.random() * 100000);
  const userId = new mongoose.Types.ObjectId().toHexString();

  const order = Order.build({
    id: new mongoose.Types.ObjectId().toHexString(),
    // If you use the mock
    // price: 20,
    price,
    status: OrderStatus.Created,
    userId,
    version: 0,
  });
  await order.save();

  await request(app)
    .post("/api/payments")
    .set("Cookie", global.signin(userId))
    .send({
      token: "tok_visa",
      orderId: order.id,
    })
    .expect(201);

  // If you use the mock
  // const chargeOptions = (stripe.charges.create as jest.Mock).mock.calls[0][0];
  // expect(chargeOptions.source).toEqual("tok_visa");
  // expect(chargeOptions.amount).toEqual(20 * 100);
  // expect(chargeOptions.currency).toEqual("usd");

  const stripeCharges = await stripe.charges.list({ limit: 50 });
  const stripeCharge = stripeCharges.data.find((charge) => {
    return charge.amount === price * 100;
  });

  expect(stripeCharge).toBeDefined();
  expect(stripeCharge!.currency).toEqual("usd");
});
