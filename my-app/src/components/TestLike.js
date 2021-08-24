import React, { Component} from 'react';
import { FacebookProvider, Like } from 'react-facebook';
 
export default class TestLike extends Component {
  render() {
    return (
      <FacebookProvider appId="372848021248529">
        <Like href="https://www.facebook.com/Feeds-Tester-170107151801959/" colorScheme="dark" showFaces share />
      </FacebookProvider>
    );
  }
}