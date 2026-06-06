const uploadFile = (req, res) => {
    if (req.file) {
      res.json({ success: true, message: 'File uploaded successfully', file: req.file });
    } else {
      res.status(400).json({ success: false, message: 'File upload failed' });
    }
  };
  
  module.exports = {
    uploadFile
  };
  