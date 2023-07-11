import {ImageData, createCanvas, loadImage} from 'canvas';
import Color from '../../models/interfaces/Color';

function findClosestColor(color: Color, palette: Color[]): Color {
  let minDistance = Infinity;
  let closestColor = palette[0];
  for (const paletteColor of palette) {
    const distance = Math.sqrt(
      (color.r - paletteColor.r) ** 2 +
        (color.g - paletteColor.g) ** 2 +
        (color.b - paletteColor.b) ** 2
    );
    if (distance < minDistance) {
      minDistance = distance;
      closestColor = paletteColor;
    }
  }
  return closestColor;
}

function ditherImage(
  imageData: ImageData,
  width: number,
  height: number,
  palette: Color[]
) {
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const index = (y * width + x) * 4;
      const oldR = imageData.data[index];
      const oldG = imageData.data[index + 1];
      const oldB = imageData.data[index + 2];
      const newColor = findClosestColor({r: oldR, g: oldG, b: oldB}, palette);
      imageData.data[index] = newColor.r;
      imageData.data[index + 1] = newColor.g;
      imageData.data[index + 2] = newColor.b;
      const errR = oldR - newColor.r;
      const errG = oldG - newColor.g;
      const errB = oldB - newColor.b;
      if (x + 1 < width) {
        imageData.data[index + 4] += (errR * 7) / 16;
        imageData.data[index + 5] += (errG * 7) / 16;
        imageData.data[index + 6] += (errB * 7) / 16;
      }
      if (y + 1 < height) {
        if (x > 0) {
          imageData.data[index + width * 4 - 4] += (errR * 3) / 16;
          imageData.data[index + width * 4 - 3] += (errG * 3) / 16;
          imageData.data[index + width * 4 - 2] += (errB * 3) / 16;
        }
        imageData.data[index + width * 4] += (errR * 5) / 16;
        imageData.data[index + width * 4 + 1] += (errG * 5) / 16;
        imageData.data[index + width * 4 + 2] += (errB * 5) / 16;
        if (x + 1 < width) {
          imageData.data[index + width * 4 + 4] += (errR * 1) / 16;
          imageData.data[index + width * 4 + 5] += (errG * 1) / 16;
          imageData.data[index + width * 4 + 6] += (errB * 1) / 16;
        }
      }
    }
  }
  return imageData;
}

async function getImageData(imagePath: string): Promise<ImageData> {
  const image = await loadImage(imagePath);
  const canvas = createCanvas(image.width, image.height);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(image, 0, 0);
  return ctx.getImageData(0, 0, image.width, image.height);
}

const ditherAe = {
  findClosestColor,
  ditherImage,
  getImageData,
};

export default ditherAe;
