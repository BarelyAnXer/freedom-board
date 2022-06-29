const mongoose = require('mongoose')

const messageSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    author: {
      type: String,
    },
    dedicatedTo: {
      type: String,
    },
    content: {
      type: String,
    },
    temp: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
)

module.exports = mongoose.model('Message', messageSchema)
