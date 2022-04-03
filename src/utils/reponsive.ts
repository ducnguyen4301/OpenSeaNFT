import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
console.log(width, height);
//Iphone X/XS/11 Pro
const DESIGN_WIDTH = 392;
const DESIGN_HEIGHT = 718;

const WIDTH = width > height ? height : width;
const HEIGHT = width > height ? width : height;

const scale = (size: number) => {
  return (WIDTH / DESIGN_WIDTH) * size;
};

const verticalScale = (size: number) => {
  return (HEIGHT / DESIGN_HEIGHT) * size;
};

const moderateScale = (size: number, factor: number = 0.5) => {
  return size + (scale(size) - size) * factor;
};

/**
 *
 * getSize.m(10) Responsive for padding - margin - fontSize.
 *
 * getSize.s(10) Responsive by width screen. (Image Size)
 *
 * getSize.v(10) Responsive by height screen.
 **/
export const getSize = {
  m: moderateScale,
  s: scale,
  v: verticalScale,
};
