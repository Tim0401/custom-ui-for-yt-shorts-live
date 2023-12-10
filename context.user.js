// ==UserScript==
// @name         Custom UI for YouTube Shorts Live (Context Menu)
// @version      0.6.1
// @namespace    https://github.com/Tim0401
// @description  Custon UI for watching YouTube Shorts style live stream
// @author       Tim0401
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @match        https://www.youtube.com/*
// @run-at       context-menu
// @require      https://raw.githubusercontent.com/Tim0401/custom-ui-for-yt-shorts-live/main/common.js
// @grant        none
// ==/UserScript==
//@ts-check

/**
It is unstable because it was created for personal use.
*/

// toggle
if (document.getElementsByClassName(YOUTUBE_SHORTS_LIVE_CLASS_NAME)?.length === 0) {
  add(window.location.href);
} else {
  remove();
}
