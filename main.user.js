// ==UserScript==
// @name         Custom UI for YouTube Shorts Live
// @version      0.5.1
// @namespace    https://github.com/Tim0401
// @description  Custon UI for watching YouTube Shorts style live stream
// @author       Tim0401
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @match        https://www.youtube.com/*
// @require      https://raw.githubusercontent.com/Tim0401/custom-ui-for-yt-shorts-live/main/common.js
// @grant        none
// ==/UserScript==
//@ts-check

/**
It is unstable because it was created for personal use.
*/

// メイン処理
const process = () => {
    console.debug("Content changed");
    remove();
    add(window.location.href);
}

// ページ遷移時に発火する
document.addEventListener("yt-navigate-finish", process);
