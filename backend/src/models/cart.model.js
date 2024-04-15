import { model, Schema } from 'mongoose';
import { FoodModel } from './food.model.js'; // Import the Food model schema

// Define the schema for the cart item data
const cartItemSchema = new Schema(
  {
    _id: { type: Schema.Types.ObjectId, auto: true }, // Unique identifier for the cart item
    food: { type: Schema.Types.ObjectId, ref: 'Food', required: true }, // Reference to the Food model schema
    quantity: { type: Number, required: true },
    name: { type: String, required: true },
    imageUrl: { type: String, required: true }, // URL of the food item's image
    price: { type: Number, required: true }, // Price of the food item
  },
  {
    _id: false,
  }
);

  

// Define the schema for the cart data
const cartSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the User model
  items: [cartItemSchema], // Array of cart items
});

// Create and export the Cart model
export const Cart = model('Cart', cartSchema);
export default Cart;
