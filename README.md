# 🌄 React Placeholder Image

Quickly mock up UI's with placeholder images.

[Powered by https://placeholder.com]

![](https://via.placeholder.com/400x200/123456/ffffff?text=Demo)

## Usage

Use the `PlaceholderImage` React component

```jsx
import { PlaceholderImage } from 'react-placeholder-image';
```

![Simple placeholder image](https://via.placeholder.com/200x200)

```jsx
// simple, square image (width and height are required)
<PlaceholderImage width={200} height={200} />
```

![Complex placeholder image](https://via.placeholder.com/200x100/123456/ffffff?text=Hello%20World!)

```jsx
// image with custom background-color, text, textColor, width, and height
<PlaceholderImage
  width={200}
  height={100}
  backgroundColor="#123456"
  textColor="#ffffff"
  text="Hello World!"
/>
```

or simply generate an image URL to use in your own image component

```jsx
import { generatePlaceholderImageURL } from 'react-placeholder-image';

// simple sized image
const placeholderImageURL = generatePlaceholderImageURL(200, 200);

// pass options to customize the background-color, text, and height
const otherPlaceholderImageURL = generatePlaceholderImageURL(200, 100, {
  backgroundColor: '#123456',
  textColor: '#ffffff',
  text: 'Hello World!',
});
```
