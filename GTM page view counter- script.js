<script>function gtm_setCookie(name, value, expires) {
    var cookie = name + "=" + value + "; path=/; domain=." + location.hostname.replace(/^www\./i, "");

    if (typeof expires !== "undefined") {
        var now = new Date();
        now.setTime(now.getTime() + expires * 24 * 60 * 60 * 1000);
        cookie += "; expires=" + now.toUTCString();
    }

    document.cookie = cookie;
}

function gtm_getCookie(name) {
    var cookies = document.cookie.split(";"),
        toReturn;

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.indexOf(name + "=") === 0) {
            toReturn = cookie.substring((name + "=").length, cookie.length);
        }
    }

    return toReturn;
}

(function() {
    var pageviewCount = gtm_getCookie("gtm_pageview_count");

    if (typeof pageviewCount === "undefined") {
        pageviewCount = 1;
    } else {
        pageviewCount++;
    }

    gtm_setCookie("gtm_pageview_count", pageviewCount, 30);

})();
</script>