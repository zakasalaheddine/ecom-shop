import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const submit = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    subject: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    const messageId = await ctx.db.insert("contactMessages", {
      name: args.name,
      email: args.email,
      subject: args.subject,
      message: args.message,
      status: "new",
      createdAt: Date.now(),
    });

    return messageId;
  },
});

export const list = query({
  handler: async (ctx) => {
    const messages = await ctx.db
      .query("contactMessages")
      .withIndex("by_created_at")
      .order("desc")
      .collect();

    return messages;
  },
});

export const listByStatus = query({
  args: {
    status: v.string(),
  },
  handler: async (ctx, args) => {
    const messages = await ctx.db
      .query("contactMessages")
      .withIndex("by_status", (q) => q.eq("status", args.status))
      .order("desc")
      .collect();

    return messages;
  },
});

export const updateStatus = mutation({
  args: {
    id: v.id("contactMessages"),
    status: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, {
      status: args.status,
    });
  },
});

export const remove = mutation({
  args: {
    id: v.id("contactMessages"),
  },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});
