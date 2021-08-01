import mongoose from 'mongoose';

import 'dotenv/config.js';

mongoose.connect(
  `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_URL}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

export { mongoose };