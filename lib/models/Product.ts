import mongoose, { Schema, model, models } from "mongoose";

const ProductSchema = new Schema(
  {
    title: { type: String, required: [true, "Названия товара обязательно"] },
    description: { type: String },
    price: { type: Number, required: [true, "Цены товара обязательно"] },
    category: {
      type: String,
      required: [true, "Категория товара обязательно"],
    },
    brand: { type: String, required: [true, "Бренд товара обязательно"] },
    color: { type: String, required: [true, "Цвет товара обязательно"] },
    image: { type: String },
    slug: { type: String },
    stock: { type: Number, required: [true, "Количество товара обязательно"] },
  },
  { timestamps: true },
);
const Product = models.Product || model("Product", ProductSchema);

export default Product;
