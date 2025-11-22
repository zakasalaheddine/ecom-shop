import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  categories: defineTable({
    label: v.string(),
    imageUrl: v.optional(v.string()),
    storageId: v.optional(v.id("_storage")),
  }),
  types: defineTable({
    label: v.string(),
    imageUrl: v.string(),
  }),
  products: defineTable({
    title: v.string(),
    price: v.number(),
    categories: v.array(v.id("categories")),
    type: v.id("types"),
    images: v.array(v.string()),
    description: v.string(),
    tags: v.array(v.string()),
    listing_url: v.optional(v.string()),
  }),
  contactMessages: defineTable({
    name: v.string(),
    email: v.string(),
    subject: v.string(),
    message: v.string(),
    status: v.string(), // "new", "read", "replied", "archived"
    createdAt: v.number(),
  }).index("by_status", ["status"])
    .index("by_created_at", ["createdAt"]),
});