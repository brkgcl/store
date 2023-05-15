import { v4 } from 'uuid';
import multer from 'multer';
import path from 'path';
import { Request } from 'express';
// Multer yapılandırması
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Yüklenecek dosyaların nereye kaydedileceğini belirtin
    const dir = path.join(__dirname, '../files');
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    // Yüklenecek dosyaların nasıl adlandırılacağını belirtin
    const str = `${v4()}.${file.mimetype.split('/').pop()}`;

    const filename = cb(null, str);
  },
});

export const upload = multer({
  storage: storage,
});
