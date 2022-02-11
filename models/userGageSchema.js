const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserGageSchema = new Schema(
  {
    gageId: {
      type: String,
      required: 'Gage Id is required !',
      unique: true,
    },
    gageType: {
      type: String,
      default: null,
      required: 'Gage Type is required !',
    },
    receiver: {
      type: String,
      max: 500,
      required: 'Receiver address is required!',
    },
    created_at: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    collection: 'UserGages',
  }
);

module.exports = mongoose.model('UserGages', UserGageSchema);
