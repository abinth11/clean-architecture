import mongoose from 'mongoose';

const connectDatabase = async (): Promise<void> => {
  const url = process.env.DB_URL || 'mongodb://localhost:27017/';
  const dbName = process.env.DB_NAME || 'sample';

  try {
    const options: any = {
      dbName,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    await mongoose.connect(url, options);

    console.log('Connected to the database');
  } catch (error) {
    console.error('Failed to connect to the database:', error);
    throw new Error('Database connection failed');
  }
};

export default connectDatabase;
