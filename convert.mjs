import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const dir = 'public/images/SJ DEVELOPERS';

async function convertImages() {
  try {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      if (file.toLowerCase().endsWith('.tif') || file.toLowerCase().endsWith('.tiff')) {
        const inputPath = path.join(dir, file);
        const outputPath = path.join(dir, file.replace(/\.tiff?$/i, '.webp'));
        
        console.log(`Converting ${file} to WebP...`);
        
        await sharp(inputPath)
          .resize({ width: 1920, withoutEnlargement: true }) // Resize to reasonable width for web
          .webp({ quality: 80 })
          .toFile(outputPath);
          
        console.log(`Successfully converted ${file} to WebP.`);
      }
    }
    console.log('All conversions complete!');
  } catch (error) {
    console.error('Error during conversion:', error);
  }
}

convertImages();
