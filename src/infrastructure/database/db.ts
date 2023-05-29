// infrastructure/database/database.ts

import mongoose from 'mongoose';

const connectDatabase = async () => {
  try {
    // Set up the database connection
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log('Connected to the database');
  } catch (error) {
    console.error('Failed to connect to the database:', error);
    process.exit(1); // Exit the application if the database connection fails
  }
};

export default connectDatabase;
