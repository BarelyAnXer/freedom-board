const express = require('express')
const router = express.Router()
const { readMessage, createMessage } = require(
  '../controllers/messageController')

router.get('/', readMessage)
router.post('/', createMessage)

module.exports = router
