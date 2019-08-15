# 🌄 React Placeholder Image

Quickly mock up UI's with placeholder images.

## CustomPlaceholder

[Powered by https://placeholder.com]

![](https://via.placeholder.com/400x200/123456/ffffff?text=Demo)

## Usage

Use the `CustomPlaceholder` React component

```jsx
import { CustomPlaceholder } from 'react-placeholder-image';
```

![Simple placeholder image](https://via.placeholder.com/200x200)

```jsx
// simple, square image (width and height are required)
<CustomPlaceholder width={200} height={200} />
```

![Complex placeholder image](https://via.placeholder.com/200x100/123456/ffffff?text=Hello%20World!)

```jsx
// image with custom background-color, text, textColor, width, and height
<CustomPlaceholder
  width={200}
  height={100}
  backgroundColor="#123456"
  textColor="#ffffff"
  text="Hello World!"
/>
```

or simply generate an image URL to use in your own image component

```jsx
import { generateCustomPlaceholderURL } from 'react-placeholder-image';

// simple sized image
const placeholderImageURL = generateCustomPlaceholderURL(200, 200);

// pass options to customize the background-color, text, and height
const otherPlaceholderImageURL = generateCustomPlaceholderURL(200, 100, {
  backgroundColor: '#123456',
  textColor: '#ffffff',
  text: 'Hello World!',
});
```

## PhotoPlaceholder

[Powered by https://picsum.photos]

![](https://via.placeholder.com/400x200/123456/ffffff?text=Demo)

## Usage

Use the `PhotoPlaceholder` React component

```jsx
import { PhotoPlaceholder } from 'react-placeholder-image';
```

![Simple photo placeholder image](https://picsum.photos/400/200)

```jsx
// simple, square image (width and height are required)
<PhotoPlaceholder width={200} height={200} />
```

![Grayscale photo placeholder image](https://picsum.photos/400/200?grayscale=true)

```jsx
// image with grayscale option
<PhotoPlaceholder width={200} height={100} grayscale />
```

or simply generate an image URL to use in your own image component

```jsx
import { generatePhotoPlaceholderURL } from 'react-placeholder-image';

// simple sized image
const placeholderImageURL = generatePhotoPlaceholderURL(200, 200);

// pass options to get grayscale
const otherPlaceholderImageURL = generatePhotoPlaceholderURL(200, 100, {
  grayscale: true,
});
```
