const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Define the input directory containing the images
const inputDirectory = './input';

// Define the output directory where the compressed images will be saved
const outputDirectory = './output';

// Read all the files in the input directory
fs.readdir(inputDirectory, (err, files) => {
  if (err) {
    console.error('Error reading input directory:', err);
    return;
  }

  // Loop through each file
  files.forEach((file) => {
    // Check if the file is an image (you may need to modify the condition based on your specific requirements)
    if (path.extname(file).match(/\.(jpg|jpeg|png)$/i)) {
      // Create an output file path
      const outputPath = path.join(outputDirectory, file);

      // Compress the image using sharp
      sharp(path.join(inputDirectory, file))
        .jpeg({ quality: 60 }) // Adjust the quality as desired (0-100)
        .toFile(outputPath, (err) => {
          if (err) {
            console.error('Error compressing image:', file, err);
          } else {
            console.log('Image compressed:', file, 'compressed successfully');
          }
        });
    }
  });
});
