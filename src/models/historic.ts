import mongoose from 'mongoose';

const HistoricSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  date:{
    type: Date,
    default: Date.now()
  },
  description:{
    type: String
  }
});

export default mongoose.model('historic', HistoricSchema);
