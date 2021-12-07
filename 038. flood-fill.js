const paint = (image, sr, sc, prevColor, newColor) => {
  if (sr < 0 || sc < 0 || sr >= image.length || sc >= image[sr].length) {
    return;
  }

  if (image[sr][sc] !== prevColor) {
    return;
  }

  image[sr][sc] = newColor;

  paint(image, sr + 1, sc, prevColor, newColor);
  paint(image, sr - 1, sc, prevColor, newColor);
  paint(image, sr, sc + 1, prevColor, newColor);
  paint(image, sr, sc - 1, prevColor, newColor);
};

const floodFill = (image, sr, sc, newColor) => {
  if (image[sr][sc] !== newColor) {
    const prevColor = image[sr][sc];
    paint(image, sr, sc, prevColor, newColor);
  }

  return image;
};
