import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  categories: defineTable({
    label: v.string(),
    imageUrl: v.string(),
  }),
  types: defineTable({
    label: v.string(),
    imageUrl: v.string(),
  }),
  products: defineTable({
    title: v.string(),
    price: v.number(),
    category: v.id("categories"),
    type: v.id("types"),
    images: v.array(v.string()),
    description: v.string(),
    tags: v.array(v.string()),
    etsyId: v.optional(v.string()),
  }),
});