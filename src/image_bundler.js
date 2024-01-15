const images = require.context("../media", false, /\.(jpeg|jpg|png|gif|svg)$/);

// media folder "bundler"
const importAllImages = (context) => {
  let images = {};
  context.keys().forEach((item) => {
    images[item.replace("./", "")] = context(item);
  });
  return images;
};

const allImages = importAllImages(images);

console.log(allImages);

export default allImages;