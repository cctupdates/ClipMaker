const express = require('express')

const router = express.Router()

const File = require('../model/File')
const { v4: uuidv4 } = require('uuid')

//Upload a video
router.post('/', async (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' })
  }
  const { clips } = req.body

  const file = req.files.file

  const fileFields = {}
  // let file = await File.findOne({ uuid: req.params.uuid })
  fileFields.uuid = uuidv4()
  fileFields.name = file.name
  fileFields.filepath = `/uploads/${file.name}`
  fileFields.createdAt = new Date().toLocaleDateString()
  if (clips) fileFields.clips = clips

  try {
    fileSaved = new File(fileFields)

    file.mv(`${__dirname}/../client/public/uploads/${file.name}`, (err) => {
      if (err) {
        console.error(err)
        return res.status(500).send(err)
      }
    })
    await fileSaved.save()
    res.json(fileSaved)
  } catch (err) {
    console.log(err)
  }
})

module.exports = router
