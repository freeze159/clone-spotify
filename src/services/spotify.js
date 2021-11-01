import {SCOPE,CLIENT_ID,REDIRECT_URI} from '../constants'
export const authEndpoint = "https://accounts.spotify.com/authorize";
// Replace with your app's client ID, redirect URI and desired scopes

/**
 * input '#access_token=BQCIDxF5ppAxZ3jZC5wUPxtTvzW5d4HDLd1a9GcpV8ZHKgHQDtMokz2jBFbb0SjyCmYdKKEwH9ofrAKCWz6hk4xnIESMT-PFeNbSxIxn0Rmp9ySQBelZ-wLa23xKlta7i9c4h07cHk1s2CPYm7wxTLW6NVVQi3X-_owe8FIE_9eOvHRsWScuGRS8&token_type=Bearer&expires_in=3600'
 * @return
 * output : {
 * access_token: "BQCIDxF5ppAxZ3jZC5wUPxtTvzW5d4HDLd1a9GcpV8ZHKgHQDtMokz2jBFbb0SjyCmYdKKEwH9ofrAKCWz6hk4xnIESMT-PFeNbSxIxn0Rmp9ySQBelZ-wLa23xKlta7i9c4h07cHk1s2CPYm7wxTLW6NVVQi3X-_owe8FIE_9eOvHRsWScuGRS8"
    expires_in: "3600"
    token_type: "Bearer"
 * }
 */

export const getTokenFromResponse = () => {
  return window.location.hash
    // remove hash sign
    .substring(1)
    //split other parameter
    .split("&")
    /**
     * loop the array above => object {
     *  paramName[0]: value[0],
     * ...
     * } 
     */
    .reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const accessUrl = `${authEndpoint}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE.join(
  "%20"
)}&response_type=token&show_dialog=true`;
