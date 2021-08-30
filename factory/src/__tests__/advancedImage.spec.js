import { createImage, Image } from '../advancedImage.js'

describe('Advanced Image Factory', () => {
  test('shoud create an instance of Image given the type is not supported', () => {
    const imageInstance = createImage('bmp')
    expect(imageInstance).toBeInstanceOf(Image)
  })

  test('shoud create an instance of JPG given the type is jpg', () => {
    const imageInstance = createImage('jpg')
    expect(imageInstance).toBeInstanceOf(Image)
  })

  test('shoud create an instance of GIF given the type is gif', () => {
    const imageInstance = createImage('gif')
    expect(imageInstance).toBeInstanceOf(Image)
  })

  test('shoud create an instance of PNG given the type is png', () => {
    const imageInstance = createImage('png')
    expect(imageInstance).toBeInstanceOf(Image)
  })
})