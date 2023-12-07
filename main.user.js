// ==UserScript==
// @name         Custom UI for YouTube Shorts Live
// @version      0.2
// @namespace    https://gist.github.com/Tim0401
// @description  Custon UI for watching YouTube Shorts style live stream
// @author       Tim0401
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @require      https://raw.githubusercontent.com/Tim0401/custom-ui-for-yt-shorts-live/main/common.js
// @grant        none
// ==/UserScript==

/**
It is unstable because it was created for personal use.
*/

// ページ遷移時に発火する
// processはcommon.jsにて定義済
document.addEventListener("yt-navigate-finish", process);
