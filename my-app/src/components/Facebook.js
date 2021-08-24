import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
// import Button from 'react-bootstrap/Button';

// import TestGroup from './TestGroup';
// import TestPage from './TestPage';
// import TestLike from './TestLike';
import TestComments from './TestComments';
import TestLoginStatus from './TestLoginStatus';

import Grid from '../DevExtreme/Grid'

export default class Facebook extends Component {
    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: ''
    }

// componentClicked = () => console.log('login clicked');
responseFacebook = response => {
    this.setState({
        isLoggedIn: true,
        userID: response.userID,
        name: response.name,
        email: response.email,
        picture: response.picture.data.url
    })
}

render() {
    let fbContent; 
    if (this.state.isLoggedIn) {
    fbContent = (
        <div className="fbContent" >

            <div className="user_info">
            <div className="login_info">
                    <img src={this.state.picture} alt={this.state.name}/>
                    <h1>Welcome, {this.state.name}!</h1>
                    <p>Email: {this.state.email}</p>
                    <TestLoginStatus />
                </div>
                <div>
                    <img className="mantexting" src="https://i.imgur.com/kfCaHAB.png" alt="man texting" width="400" height="325"></img>
                </div>
            </div>

            <div className="modules">   
                <div>
                    {/* <TestGroup />
                    <br />
                    <TestPage />
                    <br />
                    <TestLike />
                    <br /> */}
                    <Grid />
                    {/* <Button 
                    variant="outline-primary"
                    >Save To Favorites</Button>{' '} */}
                </div>
                <div>
                    <TestComments />
                </div>
            </div>
        </div>
    );
    } else {
    fbContent = (
    <FacebookLogin
        appId="372848021248529"
        auto_logout_link={true}
        fields="name,email,picture"
        // onClick={this.componentClicked}
        callback={this.responseFacebook} />
    );
    }

    return (
        <div>
            {fbContent}
        </div>
    )
}
}
