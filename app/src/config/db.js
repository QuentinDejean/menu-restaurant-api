import mongoose from 'mongoose';

const connect = function connect () {
  const options = { server: { socketOptions: { keepAlive: 1 } } };
  return mongoose.connect('mongodb://localhost/restaurant');
}

export default connect;
