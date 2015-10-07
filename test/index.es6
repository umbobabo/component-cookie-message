import React from 'react';
import CookieMessage from '../index.es6';
import { stub, spy } from 'sinon';

describe('Teaser component', () => {
  it('is compatible with React.Component', () => {
    CookieMessage.should.be.a('function').and.respondTo('render');
  });
  it('renders a React element', () => {
    React.isValidElement(
      <CookieMessage/>
    ).should.equal(true);
  });
  describe('cookie', () => {
    function renderCookieMessage(cookieStub) {
      return React.renderToString(
        <CookieMessage cookieStub={cookieStub}/>
      );
    }
    const cookieName = 'ec_cookie_message_0';
    let cookie = {};
    beforeEach(() => {
      cookie = {
        load: stub(),
        save: spy(),
      };
    });
    it('is set on first load', () => {
      renderCookieMessage(cookie);
      cookie.load.calledWith(cookieName).should.equal(true);
    });
    it('is not set if it exists', () => {
      cookie.load = stub().returns(true);
      renderCookieMessage(cookie);
      cookie.save.called.should.equal(false);
    });
    it('does not return a message if the cookie exists', () => {
      cookie.load = stub().returns(true);
      const cookieMessageRenderedString = renderCookieMessage(cookie);
      cookieMessageRenderedString.should.contain('<noscript');
      cookieMessageRenderedString.should.not.contain('cookie');
    });
  });
});
