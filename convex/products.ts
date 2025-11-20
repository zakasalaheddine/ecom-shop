import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const list = query({
  handler: async (ctx) => {
    const products = await ctx.db.query("products").collect();

    const productsWithDetails = await Promise.all(
      products.map(async (product) => {
        const category = await ctx.db.get(product.category);
        const type = await ctx.db.get(product.type);

        return {
          ...product,
          categoryLabel: category?.label || "Unknown",
          typeLabel: type?.label || "Unknown",
        };
      })
    );

    return productsWithDetails;
  },
});

export const create = mutation({
  args: {
    title: v.string(),
    price: v.number(),
    category: v.id("categories"),
    type: v.id("types"),
    imageUrl: v.string(),
    listingUrl: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("products", {
      title: args.title,
      price: args.price,
      category: args.category,
      type: args.type,
      imageUrl: args.imageUrl,
      listingUrl: args.listingUrl,
    });
  },
});

export const update = mutation({
  args: {
    id: v.id("products"),
    title: v.string(),
    price: v.number(),
    category: v.id("categories"),
    type: v.id("types"),
    imageUrl: v.string(),
    listingUrl: v.string(),
  },
  handler: async (ctx, args) => {
    const { id, ...data } = args;
    await ctx.db.patch(id, data);
  },
});

export const remove = mutation({
  args: {
    id: v.id("products"),
  },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});
