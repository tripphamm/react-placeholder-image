# 🌄 React Image Placeholder

Quickly mock up UI's with placeholder images.

Powered by https://placeholder.com

![](https://via.placeholder.com/400x200/123456/ffffff?text=Demo)

## Usage

Use the `PlaceholderImage` React component

```js
import { PlaceholderImage } from 'react-placeholder-image';

// simple, square image (width is the only required prop)
<PlaceholderImage width={200} />

// image with custom background-color, text, textColor, width, and height
<PlaceholderImage width={200} height={100} backgroundColor="#123456" textColor="#ffffff" text="Hello World!" />

// accepts all valid <img> props
<PlaceholderImage className="my-placeholder-image" width={200} alt="Placeholder" />
```

or simply generate an image URL to use in your own image component

```js
import { generatePlaceholderImageURL } from 'react-placeholder-image';

// width is the only required parameter
const placeholderImageURL = generatePlaceholderImageURL(200);

// pass options to customize the background-color, text, and height
const otherPlaceholderImageURL = generatePlaceholderImageURL(200, {
  height: 100,
  backgroundColor: '#123456',
  textColor: '#ffffff',
  text: 'Hello World!',
});
```

![](https://via.placeholder.com/400x250/123456/654321?text=Kitchen sink)
![](https://via.placeholder.com/400x250/123456/654321?text=Kitchen sink)
