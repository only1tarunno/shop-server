const stripe = require("stripe")(process.env.STRIPE_SECRET);

const paymentIntent = async (req, res) => {
  const { price } = req.body;
  const ammount = parseInt(price * 100);
  if (ammount < 1) return;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: ammount,
    currency: "usd",
    payment_method_types: ["card"],
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
};

module.exports = paymentIntent;
