const mongoose = require('mongoose');
const { Schema } = mongoose;

const GageSchema = new Schema(
  {
    id: {
      type: Number,
      required: 'Gage ID is required!',
      unique: true,
    },
    type: {
      type: String,
      default: null,
      required: 'Gage type is required!',
    },
    receiver: {
      type: String,
      max: 500,
      required: 'Receiver address is required!',
    },
    deposit: {
      type: String,
      default: null,
      required: 'Deposit required!'
    },
    status: {
      type: String,
      default: 'Pending',
    },
    created_at: {
      type: Date,
      default: Date.now(),
    }
  },
  {
    collection: 'Gages',
  }
);

module.exports = mongoose.model('Gage', GageSchema);
