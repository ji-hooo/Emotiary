import multer from 'multer';
import path from 'path';

const FileFilter = (req: any, file: Express.Multer.File, cb: any) => {
  if (
    (file.mimetype.startsWith('image/') ||
      file.mimetype.startsWith('video/')) &&
    (file.mimetype === 'video/mp4' ||
      file.mimetype === 'image/jpeg' ||
      file.mimetype === 'image/png')
  ) {
    cb(null, true);
  } else {
    cb(new Error('mp4,jpeg,png이외에는 업로드가 불가능합니다.'), false);
  }
};

const fileStorage = multer.diskStorage({
  destination: './fileUpload/',
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const fileName = `${Date.now()}${ext}`;
    cb(null, fileName);
  },
});

const fileUploadMiddleware = multer({
  storage: fileStorage,
  fileFilter: FileFilter,
}).array('filesUpload', 5);

export { fileUploadMiddleware };
