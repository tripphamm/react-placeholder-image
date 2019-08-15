/**
 * Removes any properties that undefined
 * @param obj - any object
 */
export function removeUndefined(obj: { [key: string]: any }) {
  return Object.entries(obj).reduce<{ [key: string]: any }>(
    (acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = value;
      }

      return acc;
    },
    {}
  );
}

/**
 * An id that can be appended to a URL in order to identify a particular image within a browser cache
 *
 * Many random-image-generating services will return different images for the same URL,
 * but the browser will cache the result for the first request and will serve the cached response for subsequent requests
 * which means that all requests will effectively return the _same_ image every time.
 * So, we circumvent the browser's caching by appending a unique id to each request which ensures a cache-miss
 */
export function generateCacheId() {
  return (Math.random() * 100000).toFixed(0);
}
