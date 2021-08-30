import { createImage, Image } from '../image.js'

/**
 * Here is an example of the Factory pattern,
 * in the example the createImage function returns the instance of the Image class,
 *  so we don't need to show our constructor :P
 */

describe('Image Factory', () => {
  test('shoud create a new instance of Image', () => {
    const imageInstance = createImage('jpg')
    expect(imageInstance).toBeInstanceOf(Image)
  })
})