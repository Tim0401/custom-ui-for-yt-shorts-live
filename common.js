//@ts-check

// YouTubeに追加で適用するスタイル
const s = (aspectRatio = "9 / 16") => (`
body {
    overflow-x: hidden;
    overflow-y: hidden;
}

/* ビデオサイズ */
video.video-stream.html5-main-video {
    height: 100vh !important;
    width: auto !important;
    left: 0 !important;
}

#columns {
    margin: 0 !important;
    gap: 2vw;
    flex-direction: row !important;
}

/* 左側のメインコンテナ */
#primary {
    padding: 0 !important;
    margin: 0 !important;
    min-width: 0 !important;
    flex-basis: auto !important;
}

ytd-watch-flexy[flexy] #primary.ytd-watch-flexy {
    flex: 0 1 auto !important;
    flex-basis: auto !important;
}

/* ビデオサイズに伴うコンテナの調整 */
#player, #primary-inner, #container, #ytd-player, #player-container, #player-container-inner, #player-container-outer, #cinematics-container, .html5-video-player, .html5-video-container {
    height: 100vh !important;
    aspect-ratio: ${aspectRatio};
}

#ytd-player {
    border-radius: 0px !important;
}

/* ヘッダーの消去 */
#masthead-container {
    display: none;
}
#page-manager {
    margin-top: 0 !important;
}

/* タイトル等画面下のUIを消去 */
#player ~ * {
    display: none;
}
#below > * {
    display: none;
}
ytd-watch-metadata {
    display: none;
}
#comments {
    display: none;
}

/* チャット欄の調整 */
ytd-watch-flexy[flexy] #primary.ytd-watch-flexy:has(#chat) {
    flex-grow: 1 !important;
}
#primary-inner {
    display: flex;
    width: 100%;
    gap: 2vw;
}
#below {
    display: flex;
}
#below, #chat-container, #chat {
    flex-grow: 1; 
}
#below > #chat-container {
    display: flex;
    width: fit-content;
}
#chat-container > #chat.ytd-watch-flexy:not([collapsed]) {
    min-width: 300px;
    height: 95vh !important;
}

/* オーバーレイUIの調整 */
.ytp-chrome-bottom {
    scale: 0.6;
    width: 90vh !important;
    margin-left: -18.5vh;
}

/* プログレスバーの消去 */
.ytp-progress-bar-container{
    display: none;
}
`);

const YOUTUBE_SHORTS_LIVE_CLASS_NAME = "youtube-shorts-live";

/**
 * Utility function to add CSS in multiple passes.
 * @param {string} styleString
 */
const addStyle = (styleString) => {
    const style = document.createElement('style');
    style.textContent = styleString;
    style.classList.add(YOUTUBE_SHORTS_LIVE_CLASS_NAME);
    document.head.append(style);
}

/**
 * 追加したスタイルの削除
 */
const remove = () => {
    Array.from(document.getElementsByClassName(YOUTUBE_SHORTS_LIVE_CLASS_NAME) ?? []).forEach((e) => {
        console.debug("Remove style for yt short");
        e.remove()
    });
}

/**
 * 縦型動画の判定とスタイルの適用
 * @param {HTMLVideoElement} v 
 * @returns 
 */
const detectAndApply = (v) => {
    console.debug("Check if current video is yt short");
    if (v.offsetHeight > v.offsetWidth) {
        console.debug("Apply style for yt short ");
        addStyle(s(`${v.offsetWidth} / ${v.offsetHeight}`));
        return true;
    }
    return false;
}


/**
 * 前処理と追加
 * @param {string} url 
 * @returns 
 */
const add = (url) => {
    if (!url.includes("https://www.youtube.com/watch")) return;
    // 縦型動画ならスタイルを適用する
    const vs = document.getElementsByClassName("video-stream html5-main-video");
    console.debug(vs);
    if (vs.length === 0) return;

    //  適用失敗した場合は、イベントを待って再適用する
    const v = vs[0];
    if (v instanceof HTMLVideoElement) {
        if (!detectAndApply(v)) {
            v.addEventListener('loadedmetadata', () => detectAndApply(v), {
                once: true,
            });
        }
    }
}
