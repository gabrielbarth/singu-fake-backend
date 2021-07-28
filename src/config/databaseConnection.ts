import mongoose from 'mongoose';

import 'dotenv/config.js';

console.log('ENVIRONMENT = ',`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_URL}`)

mongoose.connect(
  `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_URL}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
// mongoose.Promise = global.Promise;
// mongoose.set('useCreateIndex', true);
// mongoose.set('useFindAndModify', false);

// export const AutoIncrement = require('mongoose-sequence')(mongoose);

export { mongoose };