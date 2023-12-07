// ==UserScript==
// @name         Custom UI for YouTube Shorts Live (Context Menu)
// @version      0.1
// @namespace    https://gist.github.com/Tim0401
// @description  Custon UI for watching YouTube Shorts style live stream
// @author       Tim0401
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @require      https://raw.githubusercontent.com/Tim0401/custom-ui-for-yt-shorts-live/main/common.js
// @run-at       context-menu
// @grant        none
// ==/UserScript==

/**
It is unstable because it was created for personal use.
*/

// toggle
if (document.getElementsByClassName(YOUTUBE_SHORTS_LIVE_CLASS_NAME)) {
  remove();
} else {
  add();
}