require('dotenv').config();
const express = require('express');
const cors = require('cors');
const multer = require('multer');

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
  destination: (req, file, callback) => callback(null, 'uploads'),

  filename: (req, file, callback) => callback(null, `${Date.now()}-${file.originalname}`),
});

const upload = multer({
  storage,
  fileFilter: (req, file, callback) => {
    const splitted = file.mimetype.split('/');
    const extension = splitted[splitted.length - 1];
    if (extension !== 'png') {
      callback(null, false);
      const error = new Error('Extension must be `png`');
      error.statusCode = 403;
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
