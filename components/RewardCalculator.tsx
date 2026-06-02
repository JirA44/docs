


```ts
// FILE: paymentMethods.ts
import { stripe } from "stripe";

interface PaymentMethod {
  id: string;
  name: string;
  type: string;
  bank: string;
  account: string;
}

async function getPaymentMethods(): Promise<PaymentMethod[]> {
  try {
    const paymentMethods = await stripe.payment_methods.list();
    return paymentMethods.data.map((method) => ({
      id: method.id,
      name: method.name,
      type: method.type,
      bank: "SEPA",
      account: "1234567890",
    }));
  } catch (error) {
    console.error(`Error getting payment methods: ${error}`);
    throw error;
  }
}

export { getPaymentMethods };
```


```ts
// FILE: paymentMethods.ts
import { stripe } from "stripe";

interface PaymentMethod {
  id: string;
  name: string;
  type: string;
  bank: string;
  account: string;
}

async function getPaymentMethods(): Promise<PaymentMethod[]> {
  try {
    const paymentMethods = await stripe.payment_methods.list();
    return paymentMethods.data.map((method) => ({
      id: method.id,
      name: method.name,
      type: method.type,
      bank: "SEPA",
      account: "1234567890",
    }));
  } catch (error) {
    console.error(`