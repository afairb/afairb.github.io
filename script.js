window.addEventListener("load", function() {
    var a = document.getElementsByTagName("a");
    for (var i = 0, j = a.length; i < j; i++) {
        a[i].addEventListener("click", function(e) {
            var url = this.href;
            ga("send", "event", "outbound", "click", url, {"hitCallback": function() {
                document.location = url;
            }});
            e.preventDefault();
        });
    }

    var k,
        animation = document.getElementById("animation");
    animation.className = "animate";
    animation.addEventListener("animationend", function() {
        animation.className = "";
        k = 0;
    });
    window.addEventListener("mousemove", function() {
        if (++k == 100) {
            animation.className = "animate";
        }
    });
});
