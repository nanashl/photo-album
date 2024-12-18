const express = require('express');
const router = express.Router();
const upload = require('../utils/uploadMiddleware');
const imageController = require('../controllers/imageController');

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});

const upload = multer({ storage });

router.post('/upload', upload.single('image'), imageController.uploadImage);
router.get('/', imageController.getImages);

module.exports = router;

const authMiddleware = require('../utils/authMiddleware');

router.post('/upload', authMiddleware, upload.single('image'), imageController.uploadImage);
router.post('/filter', imageController.filterImages);

