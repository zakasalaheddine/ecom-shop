import { query } from "./_generated/server";

/**
 * List all files in storage with their metadata
 */
export const listFiles = query({
  handler: async (ctx) => {
    // Get all categories with storage IDs
    const categories = await ctx.db
      .query("categories")
      .filter((q) => q.neq(q.field("storageId"), undefined))
      .collect();

    // Generate URLs for all storage files
    const filesWithUrls = await Promise.all(
      categories.map(async (category) => {
        if (!category.storageId) return null;

        const url = await ctx.storage.getUrl(category.storageId);

        return {
          storageId: category.storageId,
          url,
          usedBy: {
            type: "category" as const,
            id: category._id,
            label: category.label,
          },
        };
      })
    );

    return filesWithUrls.filter((file) => file !== null);
  },
});
