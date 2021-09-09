import React, { Component} from 'react';
import { FacebookProvider, Status } from 'react-facebook';
 
export default class TestLoginStatus extends Component {
  handleChange = (response) => {
    console.log(response);
  } 
 
  render() {
    return (
      <FacebookProvider appId="372848021248529">
        <Status>
          {({ loading, status }) => (
            <div>
              <p>You've successfully signed in.</p>
            </div>
          )}
        </Status>
      </FacebookProvider>    
    );
  }
}