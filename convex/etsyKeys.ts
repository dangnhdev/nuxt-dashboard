import { mutation } from './_generated/server.js'
import { type GenericId, v } from 'convex/values'

export const upsertMany = mutation({
  args: {
    keys: v.array(
      v.object({
        name: v.string(),
        key: v.string(),
        is_active: v.boolean(),
        select_count: v.number(),
        last_select_time: v.optional(v.number())
      })
    )
  },
  handler: async (ctx, args) => {
    const results: GenericId<'etsyKeys'>[] = []
    for (const keyData of args.keys) {
      // Check if key already exists
      const existing = await ctx.db
        .query('etsyKeys')
        .withIndex('by_key', q => q.eq('key', keyData.key))
        .first()

      if (existing) {
        // Update existing record
        await ctx.db.patch(existing._id, {
          name: keyData.name,
          is_active: keyData.is_active,
          select_count: keyData.select_count,
          last_select_time: keyData.last_select_time
        })
        results.push(existing._id)
      } else {
        // Insert new record
        const id = await ctx.db.insert('etsyKeys', keyData)
        results.push(id)
      }
    }
    return { count: results.length, ids: results }
  }
})

export const setActiveStatus = mutation({
  args: {
    key: v.string(),
    isActive: v.boolean()
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query('etsyKeys')
      .withIndex('by_key', q => q.eq('key', args.key))
      .first()

    if (!existing) {
      throw new Error(`Key not found: ${args.key}`)
    }

    await ctx.db.patch(existing._id, {
      is_active: args.isActive
    })

    return { success: true, key: args.key, isActive: args.isActive }
  }
})

export const getNextKey = mutation({
  args: {},
  returns: v.union(v.string(), v.null()),
  handler: async (ctx): Promise<string | null> => {
    // Find all active keys
    const allKeys = await ctx.db.query('etsyKeys').collect()
    const allActiveKeys = allKeys.filter(key => key.is_active)

    console.log(`Active keys: ${allActiveKeys.length}/${allKeys.length}`)

    if (allActiveKeys.length === 0) {
      return null
    }

    // Sort by select_count ascending to get the least used key
    const sortedKeys = allActiveKeys.sort(
      (a, b) => a.select_count - b.select_count
    )

    const selectedKey = sortedKeys[0]

    // Update the last_select_time and increment select_count
    await ctx.db.patch(selectedKey._id, {
      last_select_time: Date.now(),
      select_count: selectedKey.select_count + 1
    })

    return selectedKey.key
  }
})
