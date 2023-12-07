const Cart = require("../../models/Cart");
const Product = require("../../models/Product");

const payController = async (req, res) => {
  const email = req.user.email;

  const cart = await Cart.find({ email: email });
  if (cart.length) {
    for (let index = 0; index < cart.length; index++) {
      const element = cart[index];
      const singleProduct = await Product.findOne({ _id: element.menuId });
      if (singleProduct) {
        if (element.quantity > singleProduct.availability_count) {
          return res.json({
            message: `${singleProduct.title} out of stock`,
            quantitymessage: singleProduct.availability_count,
            sucess: false,
          });
        }
      }
    }
    return res.json({
      message: `successfull`,
      quantitymessage: `In Stock`,
      sucess: true,
    });
  } else {
    return res.json({
      message: `No cart`,
      quantitymessage: `Out Of Stock`,
      sucess: false,
    });
  }
};

module.exports = payController;
