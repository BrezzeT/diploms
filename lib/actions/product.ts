"use server";

import { connectDB } from "../connectdb";
import Product from "../models/Product";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
export async function createProduct(data: FormData) {
  try {
    await connectDB();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const {
      title,
      description,
      price,
      category,
      brand,
      color,
      image,
      slug,
      stock,
    } = Object.fromEntries(data);
    await Product.create({
      title,
      description: description || "",
      price: Number(price),
      category,
      brand,
      color,
      image: image || "",
      slug: slug || String(title).toLowerCase().replace(/ /g, "-"),
      stock: Number(stock),
    });

    revalidatePath("/admin/products");
  } catch (error) {
    console.error(error);
  }
  redirect("/admin/products");
}
export async function getProducts() {
  try {
    await connectDB();
    const products = await Product.find().lean();
    return JSON.parse(JSON.stringify(products));
  } catch (error) {
    console.error(error);
    return [];
  }
}
export async function deleteProduct(id: string) {
  await connectDB();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  await Product.findByIdAndDelete(id);
  revalidatePath("/admin/products");
}
