import mongoose from 'mongoose';

const HistoricSchema = new mongoose.Schema({
  date:{
    type: Date,
    default: Date.now()
  },
  description:{
    type: String
  },
  author:{
    type: String
  }
});

export default mongoose.model('historic', HistoricSchema);
