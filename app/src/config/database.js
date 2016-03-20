import mongoose from 'mongoose';

const connectDB = function connectDB() {
  const options = {
    server: {
      socketOptions: {
        keepAlive: 1
      }
    }
  };

  mongoose.connect('mongodb://localhost/restaurant', options);
  mongoose.connection.on('error', console.log);
  mongoose.connection.on('disconnected', connectDB);
};

export { connectDB };
export default mongoose;
