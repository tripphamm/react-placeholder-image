import * as React from 'react';
import url from 'url';
import { removeUndefined, generateCacheId } from '../util';

/**
 * Generates a URL for a random placeholder photo
 *
 * @param {number} width
 * @param {number} height
 * @param {object} [options]
 * @param {string} [options.grayscale={boolean}]
 */
export function generatePhotoPlaceholderURL(
  width: number,
  height: number,
  options: {
    grayscale?: boolean;
  } = {}
) {
  const { grayscale = false } = options;

  return url.format({
    protocol: 'https',
    host: 'picsum.photos',
    pathname: `/${width}/${height}`,
    query: removeUndefined({
      // if grayscale query param is present, the image will be grayscale, even if it is grayscale=false or grayscale=<nothing>
      // so we completely omit the key if grayscale is not true
      grayscale: grayscale ? grayscale : undefined,
      // automatically cache-bust the url so that same-size images on the page don't get the same image
      cacheId: generateCacheId(),
    }),
  });
}

export const PhotoPlaceholder = (
  props: React.ImgHTMLAttributes<HTMLImageElement> & {
    width: number;
    height: number;
    grayscale?: boolean;
  }
) => {
  const { width, height, grayscale, src, ...htmlProps } = props;

  if (src !== undefined) {
    console.warn(
      'Do not define the `src` prop for <PhotoPlaceholder />; the src will be generated'
    );
  }

  const [url, setURL] = React.useState<string | undefined>(undefined);

  // generating the URL is side-effectful because it generates a new random cache-busting query param
  // we use layout effect so that the url is calculated before the element is flushed to the DOM
  React.useLayoutEffect(() => {
    setURL(
      generatePhotoPlaceholderURL(width, height, {
        grayscale,
      })
    );
  }, [width, height, grayscale]);

  return React.createElement('img', {
    src: url,
    alt: 'Placeholder',
    ...htmlProps,
  });
};
