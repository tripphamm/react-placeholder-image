import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PlaceholderImage } from '../.';

const space = { margin: 20 };

const App = () => {
  return (
    <div>
      <span style={space}>
        <PlaceholderImage width={200} height={200} />
      </span>
      <span style={space}>
        <PlaceholderImage width={100} height={200} />
      </span>
      <span style={space}>
        <PlaceholderImage width={200} height={100} backgroundColor="#ff0000" />
      </span>
      <span style={space}>
        <PlaceholderImage width={200} height={100} textColor="#ff0000" />
      </span>
      <span style={space}>
        <PlaceholderImage width={200} height={100} text="Hello world" />
      </span>
      <div style={space}>
        <PlaceholderImage
          width={400}
          height={250}
          backgroundColor="#123456"
          textColor="#ffffff"
          text="Kitchen sink"
        />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
