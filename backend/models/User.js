import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {type: String, rquired: true},
  email:{type:String, required: true, unique:true},
  phone: {type:String, required:true},
  age: {type:Number, required:true},
  gender: {type : String, enum:['male', 'female', 'other'], required:true},
  bloodGroup: {type:String, required:true},
  height:{type:Number, required:true},// in cm
  weight: {type:Number, required:true},//in kg
  plan: {type:String, enum:['warrior', 'legend','titan'], required:true},
  creatAt: {type: Date, default: Date.now}
});

export default mongoose.model('User', userSchema);