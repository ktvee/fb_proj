import React, { Component} from 'react';
import { FacebookProvider, Feed } from 'react-facebook';
 
export default class TestFeed extends Component {
  render() {
    return (
      <FacebookProvider appId="372848021248529">
        <Feed link="https://www.facebook.com/groups/1054808641721340">
          {({ handleClick }) => (
            <button type="button" onClick={handleClick}>Share on Feed</button>
          )}
        </Feed>
      </FacebookProvider>    
    );
  }
}