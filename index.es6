/* global window */
import React from 'react';
import reactCookie from 'react-cookie';
// import Icon from '@economist/component-icon';

export default class CookieMessage extends React.Component {
  static get propTypes() {
    return {
      cookieName: React.PropTypes.string,
      reactCookieInstance: React.PropTypes.object,
    };
  }
  static get defaultProps() {
    return {
      cookieName: 'ec_cookie_message_0',
      reactCookieInstance: reactCookie,
    };
  }
  componentWillMount() {
    if (typeof window === 'undefined') {
      this.setState({ isCookieMessageRequired: false });
      return false;
    }
    const cookie = this.props.reactCookieInstance;
    const isCookieMessageRequired = !cookie.load(this.props.cookieName);
    this.setState({ isCookieMessageRequired });
    if (isCookieMessageRequired) {
      const isHttps = window.location.href.substr(0, 5) === 'https';
      const cookieOptions = {
        expires: new Date('01-01-2040'),
        secure: isHttps,
        httpOnly: false,
      };
      cookie.save(this.props.cookieName, '1', cookieOptions);
    }
  }
  onCloseClick() {
    this.setState({ isCookieMessageRequired: false });
  }
  render() {
    if (!this.state.isCookieMessageRequired) {
      return false;
    }

    return (
      <div className="cookie-message">
        By continuing to browse this site you are agreeing to our use of cookies.
        Review our <a href="//www.economist.com/cookies-info">cookies
        policy</a> for details or change your <a href="#">cookies preferences</a>.
        <span onClick={() => this.onCloseClick()}>X</span>
      </div>
    );
  }
}
