const Message = require('../models/messageModel')

const readMessage = async (req, res) => {
  const messages = await Message.find({})

  res.status(200).json(messages)
}

const createMessage = async (req, res) => {
  // if (!req.body.title) {
  //   return res.status(400).send('Please add a text field')
  // } else if (!req.body.author) {
  //   return res.status(400).send('Please add a text field')
  // }

  const goal = await Message.create({
    title: req.body.title,
    author: req.body.author,
    dedicatedTo: req.body.dedicatedTo,
    content: req.body.content,
    temp: '',
  })

  res.status(200).json(goal)
}

module.exports = {
  createMessage,
  readMessage,
}
