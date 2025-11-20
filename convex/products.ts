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
    images: v.array(v.string()),
    description: v.string(),
    tags: v.array(v.string()),
    etsyId: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("products", {
      title: args.title,
      price: args.price,
      category: args.category,
      type: args.type,
      images: args.images,
      description: args.description,
      tags: args.tags,
      etsyId: args.etsyId,
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
    images: v.array(v.string()),
    description: v.string(),
    tags: v.array(v.string()),
    etsyId: v.optional(v.string()),
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
        category: v.id("categories"),
        type: v.id("types"),
        images: v.array(v.string()),
        description: v.string(),
        tags: v.array(v.string()),
        etsyId: v.optional(v.string()),
      })
    ),
  },
  handler: async (ctx, args) => {
    const results = await Promise.all(
      args.products.map((product) =>
        ctx.db.insert("products", {
          title: product.title,
          price: product.price,
          category: product.category,
          type: product.type,
          images: product.images,
          description: product.description,
          tags: product.tags,
          etsyId: product.etsyId,
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
