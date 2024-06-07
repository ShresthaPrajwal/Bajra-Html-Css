function adjustIframeHeight() {
  var iframes = document.querySelectorAll("iframe");
  iframes.forEach(function (iframe) {
    iframe.style.height =
      iframe.contentWindow.document.body.scrollHeight + "px";
  });
}

window.addEventListener("load", adjustIframeHeight);
window.addEventListener("resize", adjustIframeHeight);
