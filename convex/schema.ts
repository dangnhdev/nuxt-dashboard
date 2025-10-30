import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema(
  {
    // Other tables here...

    etsyKeys: defineTable({
      key: v.string(),
      name: v.string(),
      select_count: v.number(),
      is_active: v.boolean(),
      last_select_time: v.optional(v.number()),
    }).index("by_key", ["key"]),
  },
  {
    schemaValidation: false,
  }
);
