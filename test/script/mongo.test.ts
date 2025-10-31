import mongoose from 'mongoose'

// Bun automatically loads .env.local
const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  console.error('❌ MONGODB_URI not found in .env.local')
  process.exit(1)
}

try {
  console.log('🔄 Connecting to MongoDB...')
  console.log('📍 URI:', MONGODB_URI.replace(/\/\/.*:.*@/, '//***:***@')) // Hide credentials

  await mongoose.connect(MONGODB_URI)

  console.log('✅ Connected to MongoDB successfully!')

  const db = mongoose.connection.db
  if (!db) {
    throw new Error('Database not initialized')
  }

  console.log('📊 Database:', db.databaseName)
  console.log('🔗 Host:', mongoose.connection.host)
  console.log('🔢 Port:', mongoose.connection.port)

  // List collections
  const collections = await db.listCollections().toArray()
  console.log('\n📚 Collections:', collections.length)
  collections.forEach((col) => {
    console.log('  -', col.name)
  })

  // Close connection
  await mongoose.connection.close()
  console.log('\n🔚 Connection closed')
} catch (error) {
  console.error('❌ MongoDB connection error:', error)
  process.exit(1)
}
