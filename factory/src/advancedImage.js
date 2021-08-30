class Image { }

class PNGImage extends Image { }

class JPGImage extends Image { }

class GIFImage extends Image { }

/**
 * Returns a class based on the type passed
 */

function createImage(type) {
  const supportedImageTypes = {
    jpg: JPGImage,
    png: PNGImage,
    gif: GIFImage
  }

  /**
   * The code below is an ES6 object literals feature, 
   * we are giving a new based on the type, if it is an unsupported 
   * type we return a "new Image()".
   */

  return new (supportedImageTypes[type] || Image)()
}

export { createImage, Image }