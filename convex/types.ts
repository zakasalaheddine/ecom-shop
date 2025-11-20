import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const list = query({
  handler: async (ctx) => {
    return await ctx.db.query("types").collect();
  },
});

export const create = mutation({
  args: {
    label: v.string(),
    imageUrl: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("types", {
      label: args.label,
      imageUrl: args.imageUrl,
    });
  },
});

export const update = mutation({
  args: {
    id: v.id("types"),
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
    id: v.id("types"),
  },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});

export const bulkImport = mutation({
  args: {
    types: v.array(
      v.object({
        label: v.string(),
        imageUrl: v.string(),
      })
    ),
  },
  handler: async (ctx, args) => {
    const results = await Promise.all(
      args.types.map((type) =>
        ctx.db.insert("types", {
          label: type.label,
          imageUrl: type.imageUrl,
        })
      )
    );
    return results;
  },
});

export const exportData = query({
  handler: async (ctx) => {
    const types = await ctx.db.query("types").collect();
    return types.map(({ _creationTime, ...rest }) => rest);
  },
});
