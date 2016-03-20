var metaTags = document.getElementsByTagName("meta");

var ogurl = "";
for (var i = 0; i < metaTags.length; i++) {
  if (metaTags[i].getAttribute("property") == "og:image") {
    ogurl = metaTags[i].getAttribute("content");
    break;
  }
}

chrome.runtime.onMessage.addListener(function(msg, sndr, sendResponse) {
  sendResponse({ogurl: ogurl});
});

