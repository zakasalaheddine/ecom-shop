import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const list = query({
  handler: async (ctx) => {
    return await ctx.db.query("categories").collect();
  },
});

export const create = mutation({
  args: {
    label: v.string(),
    imageUrl: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("categories", {
      label: args.label,
      imageUrl: args.imageUrl,
    });
  },
});

export const update = mutation({
  args: {
    id: v.id("categories"),
    label: v.string(),
    imageUrl: v.string(),
  },
  handler: async (ctx, args) => {
    const { id, ...data } = args;
    await ctx.db.patch(id, data);
  },
});

export const remove = mutation({
  args: {
    id: v.id("categories"),
  },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});

export const bulkImport = mutation({
  args: {
    categories: v.array(
      v.object({
        label: v.string(),
        imageUrl: v.string(),
      })
    ),
  },
  handler: async (ctx, args) => {
    const results = await Promise.all(
      args.categories.map((category) =>
        ctx.db.insert("categories", {
          label: category.label,
          imageUrl: category.imageUrl,
        })
      )
    );
    return results;
  },
});

export const exportData = query({
  handler: async (ctx) => {
    const categories = await ctx.db.query("categories").collect();
    return categories.map(({ _id, _creationTime, ...rest }) => rest);
  },
});
