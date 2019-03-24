window.addEventListener("load", function() {
  var a = document.getElementsByTagName("a");
  for (var i = 0, j = a.length; i < j; i++) {
    a[i].addEventListener("click", function() {
      var url = this.href;
      ga("send", "event", {
        eventCategory: "outbound",
        eventAction: "click",
        eventLabel: url,
        transport: "beacon"
      });
    });
  }
});
