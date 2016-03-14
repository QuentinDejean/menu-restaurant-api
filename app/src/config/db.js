import mongoose from 'mongoose';

const listen = function listen () {
  if (app.get('env') === 'test') return;
  app.listen(port);
  console.log('Express app started on port ' + port);
}

const connect = function connect () {
  var options = { server: { socketOptions: { keepAlive: 1 } } };
  return mongoose.connect(config.db, options).connection;
}


connect()
  .on('error', console.log)
  .on('disconnected', connect)
  .once('open', listen);
