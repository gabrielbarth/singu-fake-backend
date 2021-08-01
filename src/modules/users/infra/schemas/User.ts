import { v4 as uuidV4 } from 'uuid';
import { mongoose } from '../../../../config/databaseConnection';
import bcrypt from 'bcryptjs';

interface IUser extends mongoose.Document {
  name: string;
  email: string;
  address: string;
  password: string;
  bornDate: Date;
}

const UserSchema: mongoose.Schema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidV4
  },
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  address: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true,
    select: false
  },
  bornDate: {
    type: String,
    require: true
  },
  creation_date: {
    type: Date,
    default: Date.now
  }
});

UserSchema.pre('save', async function(next){
  //@ts-ignore
  const hash = await bcrypt.hash(this.password, 8);
  //@ts-ignore
  this.password = hash;

  next();
})

const UserModel = mongoose.model<IUser>('User', UserSchema);

export { IUser, UserModel };