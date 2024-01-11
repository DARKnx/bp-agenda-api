import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description:{
    type: String
  },
  createAt:{
    type: Date,
    default: Date.now()
  },
  startDate:{
    type: Date,
  },
  endDate:{
    type: Date,
  },
  client:{
    name:{
      type: String
    },
    id:{
      type: String
    },
  },
  consultant:{
    name:{
      type: String
    },
    id:{
      type: String
    },
  }
});

export default mongoose.model('event', EventSchema);
