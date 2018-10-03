import fs from 'fs';
import path from 'path';
import svg2ttf from 'svg2ttf';
import ttf2woff from 'ttf2woff';
import ttf2woff2 from 'ttf2woff2';

const convertToTTF = pathToSVG => {
  return new Promise((resolve, reject) => {
    try {
      const ttfPath = `${path.dirname(pathToSVG)}/MaterialDings.ttf`;
      const ttf = svg2ttf(fs.readFileSync(pathToSVG, 'utf8'));
      fs.writeFileSync(ttfPath, Buffer.from(ttf.buffer));
      console.log('Successfully wrote dist/fonts/MaterialDings.ttf');
      resolve(ttfPath);
    } catch (e) {
      console.error(e);
      reject(e);
    }
  });
};

const convertToWOFF = pathToTTF => {
  return new Promise((resolve, reject) => {
    try {
      const woff = ttf2woff(fs.readFileSync(pathToTTF));
      fs.writeFileSync(`${path.dirname(pathToTTF)}/MaterialDings.woff`, Buffer.from(woff.buffer));
      console.log('Successfully wrote dist/fonts/MaterialDings.woff');
      resolve(pathToTTF);
    } catch (e) {
      console.error(e);
      reject(e);
    }
  });
};

const convertToWOFF2 = pathToTTF => {
  return new Promise((resolve, reject) => {
    try {
      const woff2 = ttf2woff2(fs.readFileSync(pathToTTF));
      fs.writeFileSync(`${path.dirname(pathToTTF)}/MaterialDings.woff2`, Buffer.from(woff2.buffer));
      console.log('Successfully wrote dist/fonts/MaterialDings.woff2');
      resolve(pathToTTF);
    } catch (e) {
      console.error(e);
      reject(e);
    }
  });
};

export { convertToTTF, convertToWOFF, convertToWOFF2 };