import React, { Component } from 'react';
import { FacebookProvider, Group } from 'react-facebook';
 
export default class TestGroup extends Component {
  render() {
    return (
      <FacebookProvider appId="372848021248529">
        <Group
          href="https://www.facebook.com/groups/1054808641721340"
          width="500"
          height="500"
          showSocialContext={true}
          showMetaData={true}
          skin="light"
        />
      </FacebookProvider>    
    );
  }
}