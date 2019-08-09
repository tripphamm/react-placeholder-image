import * as React from 'react';

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
 * Generates a URL for a placeholder image
 *
 * @param {number} width
 * @param {object} [options]
 * @param {number} [options.height={match the width}]
 * @param {string} [options.backgroundColor={a light gray}]
 * @param {string} [options.text={the size of the image}]
 * @param {string} [options.textColor={black}]
 */
export function generatePlaceholderImageURL(
  width: number,
  height: number,
  options: {
    backgroundColor?: string;
    textColor?: string;
    text?: string;
  } = {}
) {
  const { backgroundColor, textColor, text } = options;

  const pathParts = [
    `${width}x${height}`,
    backgroundColor ? sanitizeHex(backgroundColor) : '',
    textColor ? sanitizeHex(textColor) : undefined,
  ].filter(part => part !== undefined);

  const query = text !== undefined ? `?text=${text}` : '';

  return `https://via.placeholder.com/${pathParts.join('/')}${query}`;
}

/**
 * A PlaceholderImage component
 */
export const PlaceholderImage = (
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
      'Do not define the `src` prop for <PlaceholderImage />; the src will be generated'
    );
  }

  return React.createElement('img', {
    src: generatePlaceholderImageURL(width, height, {
      backgroundColor,
      textColor,
      text,
    }),
    alt: 'placeholder',
    ...htmlProps,
  });
};
