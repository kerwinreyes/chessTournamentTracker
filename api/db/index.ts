import mongoose from 'mongoose';

const connectToDatabase = async (): Promise<void> => {
    const uri: string = process.env.MONGO_ATLAS_URL || "";
    try {
        await mongoose.connect(uri);
        console.log('Connected to the database');
    } catch (error) {
        console.log('Error connecting to the database:', error);
    }
};

export default connectToDatabase;