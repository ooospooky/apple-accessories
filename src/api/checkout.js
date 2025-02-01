import { loadStripe } from "@stripe/stripe-js";

export default async function checkout(lineItems) {
  let stripePromise = null;
  const getStripe = () => {
    if (!stripePromise) {
      stripePromise = loadStripe(process.env.NEXT_PUBLIC_API_KEY);
    }
    return stripePromise;
  };
  const stripe = await getStripe();

  await stripe.redirectToCheckout({
    mode: "payment",
    lineItems: lineItems,
    successUrl: `${window.location.origin}/success`,
    cancelUrl: window.location.origin,
  });
}
