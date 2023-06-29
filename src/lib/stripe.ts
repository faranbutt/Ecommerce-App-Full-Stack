import { Stripe, loadStripe } from "@stripe/stripe-js";

let stripePromise: Promise<Stripe | null>;

const getStripe = () => {
  const key = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "";

  if (!stripePromise && process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
    stripePromise = loadStripe(key);
  }

  return stripePromise;
};

export default getStripe;