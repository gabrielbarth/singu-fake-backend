import { v4 as uuidV4 } from 'uuid';
import { mongoose } from '../../../../config/databaseConnection';

interface IService extends mongoose.Document {
  description: string;
  category: string;
}

const ServiceSchema: mongoose.Schema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidV4
  },
  description: {
    type: String,
    require: true
  },
  category: {
    type: String,
    require: true
  },

});

const ServiceModel = mongoose.model<IService>('Service', ServiceSchema);

export { IService, ServiceModel };