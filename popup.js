var ogurl = "";

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, "msg", function(response) {
    ogurl = response.ogurl;
    document.getElementById("img-preview").src = ogurl;
    document.getElementById("img-url").href = ogurl;

    var idealLength = 50;
    var ogurlLength = ogurl.length;
    if (ogurlLength > idealLength) {
      var extra = ogurlLength - idealLength;
      var middle = Math.floor(ogurlLength/3);
      var ogurlTrunc = ogurl.replace(ogurl.slice(middle,middle+extra), "...");
      document.getElementById("img-url").innerHTML = ogurlTrunc;
    }
    else {
      document.getElementById("img-url").innerHTML = ogurl;
    }

  });
});

document.getElementById("img-preview").onclick = download;

function download() {
  if (ogurl != "") {
    chrome.downloads.download({
      url: ogurl,
      filename: ogurl.split("/").pop().replace(/\?.*/, '')
    });
  }
}
