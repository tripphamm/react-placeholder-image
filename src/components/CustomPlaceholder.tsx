import * as React from 'react';
import url from 'url';
import { removeUndefined } from '../util';

/**
 * Checks whether the input string is valid hex and then removes the hash
 * @param {string} hex
 */
function sanitizeHex(hex: string) {
  if (!/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex)) {
    throw new Error(`Expected valid hex color, got "${hex}"`);
  }

  return hex.substring(1); // remove the hash
}

/**
 * Generates a URL for a custom placeholder image
 *
 * @param {number} width
 * @param {number} height
 * @param {object} [options]
 * @param {string} [options.backgroundColor={a light gray}]
 * @param {string} [options.text={the size of the image e.g. "200x100"}]
 * @param {string} [options.textColor={auto-contrast with backgroundColor}]
 */
export function generateCustomPlaceholderURL(
  width: number,
  height: number,
  options: {
    backgroundColor?: string;
    textColor?: string;
    text?: string;
  } = {}
) {
  const { backgroundColor, textColor, text } = options;

  return url.format({
    protocol: 'https',
    host: 'via.placeholder.com',
    pathname: [
      `${width}x${height}`,
      backgroundColor ? sanitizeHex(backgroundColor) : '',
      textColor ? sanitizeHex(textColor) : undefined,
    ]
      .filter(part => part !== undefined)
      .join('/'),
    query: removeUndefined({
      text,
    }),
  });
}

export const CustomPlaceholder = (
  props: React.ImgHTMLAttributes<HTMLImageElement> & {
    width: number;
    height: number;
    backgroundColor?: string;
    textColor?: string;
    text?: string;
  }
) => {
  const {
    width,
    height,
    backgroundColor,
    textColor,
    text,
    src,
    ...htmlProps
  } = props;

  if (src !== undefined) {
    console.warn(
      'Do not define the `src` prop for <CustomPlaceholder />; the src will be generated'
    );
  }

  return React.createElement('img', {
    src: generateCustomPlaceholderURL(width, height, {
      backgroundColor,
      textColor,
      text,
    }),
    alt: 'placeholder',
    ...htmlProps,
  });
};
