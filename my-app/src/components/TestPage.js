import React, { Component} from 'react';
import { FacebookProvider, Page } from 'react-facebook';
 
export default class TestPage extends Component {
  render() {
    return (
      <FacebookProvider appId="372848021248529">
        <Page href="https://www.facebook.com/Feeds-Tester-170107151801959/" tabs="timeline, events, messages" width="500"/>
      </FacebookProvider>    
    );
  }
}        