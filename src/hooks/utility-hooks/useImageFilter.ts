import {useState} from 'react';

import {createCanvas} from 'canvas';
import Color from '../../models/interfaces/Color';
import ditherAe from '../../lib/image-processing/ditherAe';
import UseImageFilter from '../../models/types/props/hooks/UseImageFilter';

const useImageFilter = (
  imageSrc: string,
  colorPalette: Color[]
): UseImageFilter => {
  const [editedImageSrc, setEditedImageSrc] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const applyImageFilter = async (
    src: string,
    palette: Color[]
  ): Promise<string> => {
    const imageData = await ditherAe.getImageData(src);
    const filteredImage = ditherAe.ditherImage(
      imageData,
      imageData.width,
      imageData.height,
      palette
    );
    const canvas = createCanvas(imageData.width, imageData.height);
    const ctx = canvas.getContext('2d');
    ctx.putImageData(filteredImage, 0, 0);
    return canvas.toDataURL();
  };

  const applyFilter = () => {
    applyImageFilter(imageSrc, colorPalette).then((newImage: string) => {
      setEditedImageSrc(newImage);
      setIsLoading(true);
    });
  };

  return {applyFilter, editedImageSrc, isLoading};
};

export default useImageFilter;
