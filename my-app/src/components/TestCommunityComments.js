import React, { Component} from 'react';
import { FacebookProvider, Comments } from 'react-facebook';
 
export default class TestCommunityComments extends Component {
  render() {
    return (
      <FacebookProvider appId="372848021248529">
        <Comments href="https://www.facebook.com/Feeds-Tester-170107151801959/community" />
      </FacebookProvider>
    );
  }
}