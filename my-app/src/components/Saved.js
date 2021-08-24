import React, { Component} from 'react';
import { FacebookProvider, EmbeddedPost } from 'react-facebook';
 
export default class Saved extends Component {
  render() {
    return (
      <FacebookProvider appId="372848021248529">
        <EmbeddedPost href="https://www.facebook.com/saved" width="500" />
      </FacebookProvider>
    );
  }
}