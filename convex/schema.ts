import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    nodes: defineTable({
        id: v.float64(),
        nodes: v.array(
            v.object({
                content: v.string(),
                nodeId: v.float64(),
                title: v.string(),
            })
        ),
        title: v.string(),
    }),
});