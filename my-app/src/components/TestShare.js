import React, { Component} from 'react';
import { FacebookProvider, Share } from 'react-facebook';
 
export default class TestShare extends Component {
  render() {
    return (
      <FacebookProvider appId="372848021248529">
        <Share href="https://www.facebook.com/Feeds-Tester-170107151801959/{page-post-id}">
          {({ handleClick, loading }) => (
            <button type="button" disabled={loading} onClick={handleClick}>Share To Your Page</button>
          )}
        </Share>
      </FacebookProvider>
    );
  }
}