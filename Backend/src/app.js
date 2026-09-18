const express = require('express');
const multer = require('multer');

const { uploadFile } = require('./services/storage.service');
const PostModel = require('./models/post.models');

const app = express();

app.use(express.json());

const upload = multer({
  storage: multer.memoryStorage()
});

app.post('/create-post', upload.single('image'), async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.file);

    if (!req.file) {
      return res.status(400).json({
        message: 'Image is required'
      });
    }

    // 1. Upload image to Cloudinary
    const result = await uploadFile(req.file.buffer);

    console.log('Cloudinary URL:', result.secure_url);

    // 2. Save post in MongoDB
    const post = await PostModel.create({
      image: result.secure_url,
      caption: req.body.caption
    });

    console.log('Saved Post:', post);

    // 3. Send response
    res.status(201).json({
      message: 'Post created successfully',
      post
    });

  } catch (error) {
    console.error('Create post error:', error);

    res.status(500).json({
      message: 'Post creation failed',
      error: error.message
    });
  }
});

module.exports = app;