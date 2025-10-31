# Mongoose - Plugins

**Pages:** 1

---

## Plugins

**URL:** https://mongoosejs.com/docs/plugins.html

**Contents:**
- Plugins
- Example
- Global Plugins
- Apply Plugins Before Compiling Models
- Officially Supported Plugins
- Community

Schemas are pluggable, that is, they allow for applying pre-packaged capabilities to extend their functionality. This is a very powerful feature.

Plugins are a tool for reusing logic in multiple schemas. Suppose you have several models in your database and want to add a loadedAt property to each one. Just create a plugin once and apply it to each Schema:

We just added loaded-time behavior to both our Game and Player schemas and declared an index on the loadedAt path of our Games to boot. Not bad for a few lines of code.

Want to register a plugin for all schemas? The mongoose singleton has a .plugin() function that registers a plugin for every schema. For example:

Because many plugins rely on middleware, you should make sure to apply plugins before you call mongoose.model() or conn.model(). Otherwise, any middleware the plugin registers won't get applied.

The Mongoose team maintains several plugins that add cool new features to Mongoose. Here's a couple:

You can find a full list of officially supported plugins on Mongoose's plugins search site.

Not only can you re-use schema functionality in your own projects, but you also reap the benefits of the Mongoose community as well. Any plugin published to npm and with 'mongoose' as an npm keyword will show up on our search results page.

**Examples:**

Example 1 (javascript):
```javascript
// loadedAt.js
module.exports = function loadedAtPlugin(schema, options) {
  schema.virtual('loadedAt').
    get(function() { return this._loadedAt; }).
    set(function(v) { this._loadedAt = v; });

  schema.post(['find', 'findOne'], function(docs) {
    if (!Array.isArray(docs)) {
      docs = [docs];
    }
    const now = new Date();
    for (const doc of docs) {
      doc.loadedAt = now;
    }
  });
};

// game-schema.js
const loadedAtPlugin = require('./loadedAt');
const gameSchema = new Schema({ /* ... */ });
gameSchema.plugin(loadedAtPlugin);

// player-schema.js
const loadedAtPlugin = require('./loadedAt');
const playerSchema = new Schema({ /* ... */ });
playerSchema.plugin(loadedAtPlugin);
```

Example 2 (javascript):
```javascript
const mongoose = require('mongoose');
mongoose.plugin(require('./loadedAt'));

const gameSchema = new Schema({ /* ... */ });
const playerSchema = new Schema({ /* ... */ });
// `loadedAtPlugin` gets attached to both schemas
const Game = mongoose.model('Game', gameSchema);
const Player = mongoose.model('Player', playerSchema);
```

Example 3 (javascript):
```javascript
// loadedAt.js
module.exports = function loadedAtPlugin(schema, options) {
  schema.virtual('loadedAt').
    get(function() { return this._loadedAt; }).
    set(function(v) { this._loadedAt = v; });

  schema.post(['find', 'findOne'], function(docs) {
    if (!Array.isArray(docs)) {
      docs = [docs];
    }
    const now = new Date();
    for (const doc of docs) {
      doc.loadedAt = now;
    }
  });
};

// game-schema.js
const loadedAtPlugin = require('./loadedAt');
const gameSchema = new Schema({ /* ... */ });
const Game = mongoose.model('Game', gameSchema);

// `find()` and `findOne()` hooks from `loadedAtPlugin()` won't get applied
// because `mongoose.model()` was already called!
gameSchema.plugin(loadedAtPlugin);
```

---
