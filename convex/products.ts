import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const list = query({
  handler: async (ctx) => {
    const products = await ctx.db.query("products").collect();

    const productsWithDetails = await Promise.all(
      products.map(async (product) => {
        const categories = await Promise.all(
          product.categories.map((catId) => ctx.db.get(catId))
        );
        const type = await ctx.db.get(product.type);

        return {
          ...product,
          categories: product.categories, // Keep the category IDs for filtering
          categoryLabels: categories
            .filter((cat) => cat !== null)
            .map((cat) => cat!.label),
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
    categories: v.array(v.id("categories")),
    type: v.id("types"),
    images: v.array(v.string()),
    description: v.string(),
    tags: v.array(v.string()),
    listing_url: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("products", {
      title: args.title,
      price: args.price,
      categories: args.categories,
      type: args.type,
      images: args.images,
      description: args.description,
      tags: args.tags,
      listing_url: args.listing_url,
    });
  },
});

export const update = mutation({
  args: {
    id: v.id("products"),
    title: v.string(),
    price: v.number(),
    categories: v.array(v.id("categories")),
    type: v.id("types"),
    images: v.array(v.string()),
    description: v.string(),
    tags: v.array(v.string()),
    listing_url: v.optional(v.string()),
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

export const bulkImport = mutation({
  args: {
    products: v.array(
      v.object({
        title: v.string(),
        price: v.number(),
        categories: v.array(v.id("categories")),
        type: v.id("types"),
        images: v.array(v.string()),
        description: v.string(),
        tags: v.array(v.string()),
        listing_url: v.optional(v.string()),
      })
    ),
  },
  handler: async (ctx, args) => {
    const results = await Promise.all(
      args.products.map((product) =>
        ctx.db.insert("products", {
          title: product.title,
          price: product.price,
          categories: product.categories,
          type: product.type,
          images: product.images,
          description: product.description,
          tags: product.tags,
          listing_url: product.listing_url,
        })
      )
    );
    return results;
  },
});

export const exportData = query({
  handler: async (ctx) => {
    const products = await ctx.db.query("products").collect();
    return products.map(({ _creationTime, ...rest }) => rest);
  },
});
