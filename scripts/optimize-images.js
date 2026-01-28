// scripts/optimize-images.js
import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputDir = "public/images";
let processedCount = 0;
let errorCount = 0;

async function processImage(filePath) {
  try {
    const fileName = path.basename(filePath);
    const ext = path.extname(fileName).toLowerCase();

    // Preskoci ako nije slika
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) {
      return;
    }

    // Napravi backup ako ne postoji
    const backupPath = filePath + '.backup';
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(filePath, backupPath);
    }

    // Optimizuj sliku (smanjuje velicinu bez gubljenja previse kvaliteta)
    const tempPath = filePath + '.temp';
    await sharp(filePath)
      .jpeg({ quality: 80, progressive: true })
      .toFile(tempPath);

    // Proveri da li je optimizovana slika manja
    const originalSize = fs.statSync(filePath).size;
    const optimizedSize = fs.statSync(tempPath).size;

    if (optimizedSize < originalSize) {
      fs.renameSync(tempPath, filePath);
      const savedKB = ((originalSize - optimizedSize) / 1024).toFixed(2);
      console.log(`✔ Optimized: ${fileName} (saved ${savedKB}KB)`);
      processedCount++;
    } else {
      fs.unlinkSync(tempPath);
      console.log(`⊘ Skipped: ${fileName} (already optimized)`);
    }
  } catch (error) {
    console.error(`✖ Error processing ${filePath}:`, error.message);
    errorCount++;
  }
}

async function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      await walkDir(fullPath);
    } else {
      await processImage(fullPath);
    }
  }
}

console.log("🖼️  Starting image optimization...\n");
walkDir(inputDir).then(() => {
  console.log(`\n✅ Done! Optimized ${processedCount} images.`);
  if (errorCount > 0) {
    console.log(`⚠️  ${errorCount} errors occurred.`);
  }
  console.log("\n💡 Backup files saved with .backup extension");
});
