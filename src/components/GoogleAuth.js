import React from "react";
import { connect } from 'react-redux';

import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
 

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "542325085646-ekq1l3r0mc7ghejk1u6d2o9nnj895ie7.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get())
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) =>{
    if (isSignedIn){
      this.props.signIn(this.auth.currentUser.get().getId())
    } else {
      this.props.signOut()
    }
  }

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null
    } else if (this.props.isSignedIn) {
      return (
        <button className="ui google red button" onClick={() => this.auth.signOut()}>
          <i className="google icon"></i>
          Sign Out
        </button>
      )
    } else {
      return (
        <button className="ui google red button" onClick={() => this.auth.signIn()}>
          <i className="google icon"></i>
          Sign In
        </button>
      );
    }
  }

 

  render() {    
    return <>{this.renderAuthButton()}</>;
  }
}

const mapStateToProps = (state) => {
  //console.log(state)
  return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, {
  signIn, signOut
})(GoogleAuth);
