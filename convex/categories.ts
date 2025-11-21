import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const list = query({
  handler: async (ctx) => {
    const categories = await ctx.db.query("categories").collect();

    // Convert storageId to URL if present
    return await Promise.all(
      categories.map(async (category) => {
        let imageUrl = category.imageUrl;

        // If storageId exists, get its URL
        if (category.storageId) {
          imageUrl = await ctx.storage.getUrl(category.storageId);
        }

        return {
          ...category,
          imageUrl,
        };
      })
    );
  },
});

export const create = mutation({
  args: {
    label: v.string(),
    imageUrl: v.optional(v.string()),
    storageId: v.optional(v.id("_storage")),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("categories", {
      label: args.label,
      imageUrl: args.imageUrl,
      storageId: args.storageId,
    });
  },
});

export const update = mutation({
  args: {
    id: v.id("categories"),
    label: v.string(),
    imageUrl: v.optional(v.string()),
    storageId: v.optional(v.id("_storage")),
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
        imageUrl: v.optional(v.string()),
        storageId: v.optional(v.id("_storage")),
      })
    ),
  },
  handler: async (ctx, args) => {
    const results = await Promise.all(
      args.categories.map((category) =>
        ctx.db.insert("categories", {
          label: category.label,
          imageUrl: category.imageUrl,
          storageId: category.storageId,
        })
      )
    );
    return results;
  },
});

export const exportData = query({
  handler: async (ctx) => {
    const categories = await ctx.db.query("categories").collect();
    return categories.map(({ _creationTime, ...rest }) => rest);
  },
});

// Helper mutation to update a category's storage ID by label
export const updateStorageId = mutation({
  args: {
    label: v.string(),
    storageId: v.id("_storage"),
  },
  handler: async (ctx, args) => {
    const category = await ctx.db
      .query("categories")
      .filter((q) => q.eq(q.field("label"), args.label))
      .first();

    if (!category) {
      throw new Error(`Category with label "${args.label}" not found`);
    }

    await ctx.db.patch(category._id, {
      storageId: args.storageId,
      imageUrl: undefined, // Clear imageUrl when using storageId
    });

    return category._id;
  },
});
