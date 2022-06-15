import multer from 'multer';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const timestamp = new Date().toISOString();
    const newFileName = `${timestamp}-${file.originalname
      .split(' ')
      .join('_')}`;
    cb(null, newFileName);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: Number(process.env.MAX_FILE_SIZE),
  },
  fileFilter: (req, file, cb) => {
    const fileSize = parseInt(req.headers['content-length']);
    if (
      file.mimetype === 'image/png' ||
      file.mimetype === 'image/jpg' ||
      (file.mimetype === 'image/jpeg' &&
        fileSize < Number(process.env.MAX_FILE_SIZE))
    ) {
      // file berupa gambar
      cb(null, true);
    } else {
      if (
        !(
          file.mimetype === 'image/png' ||
          file.mimetype === 'image/jpg' ||
          file.mimetype === 'image/jpeg'
        )
      ) {
        cb(null, false);
        return cb(new Error('File Harus Berformat .jpg, .png, .jpeg'));
      } else if (fileSize > Number(process.env.MAX_FILE_SIZE)) {
        cb(null, false);
        return cb(new Error('Ukuran file tidak boleh lebih dari 9mb'));
      } else {
        cb(null, false);
        return cb(new Error('File error'));
      }
    }
  },
});

export default upload;
