import mongoose from 'mongoose';
import config from 'config';

// get connection from string//
const db = config.get('mongoURI');

//connect to mongodb//

const connectDatabase = async () => {

    try {
        await mongoose.connect(db, {
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error(error.message);

        // exit with failure code//
        process.exit(1);

    }
};

export default connectDatabase;

