import generateSVGFont from './lib/generateSVGFont';
import { convertToTTF, convertToWOFF, convertToWOFF2 } from './lib/convertFont';

generateSVGFont()
  .then(convertToTTF)
  .then(convertToWOFF)
  .then(convertToWOFF2);