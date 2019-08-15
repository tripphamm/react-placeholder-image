import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  PhotoPlaceholder,
  CustomPlaceholder,
  generateCustomPlaceholderURL,
  generatePhotoPlaceholderURL,
} from '../.';

const space = { margin: 20 };

const App = () => {
  return (
    <div>
      <h2>CustomPlaceholder</h2>
      <div style={space}>
        <CustomPlaceholder width={200} height={200} />
        <div>{generateCustomPlaceholderURL(200, 200)}</div>
      </div>
      <div style={space}>
        <CustomPlaceholder width={100} height={200} />
        <div>{generateCustomPlaceholderURL(200, 200)}</div>
      </div>
      <div style={space}>
        <CustomPlaceholder width={200} height={100} backgroundColor="#ff0000" />
        <div>
          {generateCustomPlaceholderURL(200, 100, {
            backgroundColor: '#ff0000',
          })}
        </div>
      </div>
      <div style={space}>
        <CustomPlaceholder width={200} height={100} textColor="#ff0000" />
        <div>
          {generateCustomPlaceholderURL(200, 100, { textColor: '#ff0000' })}
        </div>
      </div>
      <div style={space}>
        <CustomPlaceholder width={200} height={100} text="Hello world" />
        <div>
          {generateCustomPlaceholderURL(200, 100, { text: 'Hello world' })}
        </div>
      </div>
      <div style={space}>
        <CustomPlaceholder
          width={400}
          height={250}
          backgroundColor="#123456"
          textColor="#ffffff"
          text="Kitchen sink"
        />
        <div>
          {generateCustomPlaceholderURL(200, 200, {
            backgroundColor: '#123456',
            textColor: '#ffffff',
            text: 'Kitchen sink',
          })}
        </div>
      </div>
      <h2>PhotoPlaceholder</h2>
      <div style={space}>
        <PhotoPlaceholder width={400} height={250} />
        <div>{generatePhotoPlaceholderURL(400, 200)}</div>
      </div>
      <div style={space}>
        <PhotoPlaceholder width={400} height={250} grayscale />
        <div>{generatePhotoPlaceholderURL(400, 250, { grayscale: true })}</div>
      </div>
      <div style={space}>
        <PhotoPlaceholder width={400} height={400} />
        <div>{generatePhotoPlaceholderURL(400, 400)}</div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
