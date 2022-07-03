function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function randomColor(colors) {
  if (Array.isArray(colors) && colors.length) {
    return colors[random(0, colors.length)];
  } else {
    return null
  }
}

function randomImages(images) {
  if (Array.isArray(images) && images.length) {
    return images[random(0, images.length)];
  } else {
    return null
  }
}

export {
  random,
  randomColor,
  randomImages
}