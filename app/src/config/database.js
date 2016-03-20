import mongoose from 'mongoose';

const connect = function connect() {
  const options = {
    server: {
      socketOptions: {
        keepAlive: 1
      }
    }
  };

  mongoose.connect('mongodb://localhost/restaurant', options);
  mongoose.connection.on('error', console.log);
  mongoose.connection.on('disconnected', connect);
};

export { connect };
export default mongoose;
