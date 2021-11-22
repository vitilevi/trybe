require('dotenv').config();
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

const storage = multer.diskStorage({
  destination: (req, file, callback) => callback(null, path.resolve('uploads')),

  filename: (req, file, callback) => callback(null, `${Date.now()}-${file.originalname}`),
});

const fileExistes = (fileName) => {
  const files = fs.readdirSync(path.resolve('uploads'));
  return files.some((file) => file.includes(fileName));
};

const upload = multer({
  storage,
  fileFilter: (req, file, callback) => {
    if (file.mimetype !== 'image/png') {
      const error = new Error('Extension must be `png`');
      error.statusCode = 403;
      return callback(error);
    }

    if (fileExistes(file.originalname)) {
      const error = new Error('File already exists');
      error.statusCode = 409;
      return callback(error);
    }
    callback(null, true);
  },
});

app.use(express.json());

app.get('/ping', controllers.ping);

app.post('/upload', upload.single('file'), controllers.upload);

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
