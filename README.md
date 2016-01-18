# component-cookie-message

The `cookie-message` component displays an EU cookie warning in the absence of
a cookie named `ec_cookie_message_0`.

The cookie is set to `1` upon first load.

The message will not display in the test page if the cookie is set. This code
will clear it:
```javascript
document.cookie='ec_cookie_message_0'+'=;Max-Age=0'
```

## Accepted CSS variables:

 - `--cookiemessage-vertical-padding`
 - `--cookiemessage-horizontal-padding`
 - `--cookiemessage-min-height`
 - `--cookiemessage-link-hover`
