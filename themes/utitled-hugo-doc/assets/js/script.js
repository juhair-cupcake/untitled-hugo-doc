var clipboard = new ClipboardJS(".prism-btn", {
  target: function (trigger) {
    return trigger.previousElementSibling;
  },
});

clipboard.on("success", function (event) {
  event.clearSelection();
  event.trigger.textContent = "Copied";
  window.setTimeout(function () {
    event.trigger.textContent = "Copy";
  }, 2000);
});

copyCode.on("error", function (event) {
  event.trigger.textContent = 'Press "Ctrl + C" to copy';
  window.setTimeout(function () {
    event.trigger.textContent = "Copy";
  }, 2000);
});
