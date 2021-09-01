import React, { Component} from 'react';
import Button from 'react-bootstrap/Button'
import { FacebookProvider, Share } from 'react-facebook';
 
export default class TestShare extends Component {
  render() {
    return (
      <FacebookProvider appId="372848021248529">
        <Share href="https://www.facebook.com/Feeds-Tester-170107151801959/feed">
          {({ handleClick, loading }) => (
            <Button variant="primary" disabled={loading} onClick={handleClick}>Share To Your Facebook Profile</Button>
          )}
        </Share>
      </FacebookProvider>
    );
  }
}